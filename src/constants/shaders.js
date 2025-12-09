export const vertexShader = `
  void main()	{
    gl_Position = vec4( position, 1.0 );
  }
`

export const fragmentShader = `
  uniform vec2 resolution;
  uniform float time;
  
  void main()	{
    vec2 positionNormalized = gl_FragCoord.xy / resolution.xy - .5;
    
    positionNormalized += .5*sin(vec2(.025*time, -.065*time+1.3));  

    vec4 angles = .2 * vec4(positionNormalized.xy, positionNormalized.xy);

    angles *= .5*vec4(.07*time-2., -.41*time+.13, .19*time, -.21*time)  
        +50.*sin(vec4(.02*time-2., -.031*time+.13, .039*time+.27, -.05*time)); 

    vec3 outCol = vec3(sin(angles.x)*cos(angles.y), sin(angles.y)*cos(angles.x), cos(angles.y));
    vec3 outCol2 = vec3(sin(angles.z)*cos(angles.w), sin(angles.w)*cos(angles.z), cos(angles.w));

    mat3 palette = 1./255.*mat3(
        236., 208., 5.,
        180., 132., 150.,
        162., 94., 125.);

    outCol = outCol * palette;
    outCol2 = outCol2 * palette;

    vec3 finalOut = outCol * (.22 + .37*sin(.32*time)) + outCol2 * (.34 + .26*cos(.123*time)) + .3 + .2*sin(vec3(-.1*time, -.11*time+.3, -.021*time-.2))*length(outCol2-outCol);
    
    finalOut = finalOut * palette;

    gl_FragColor = vec4(finalOut, 0);
  }
`