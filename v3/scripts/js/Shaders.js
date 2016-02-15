var RefractionShader = function(){

    this.uniforms = THREE.UniformsUtils.merge([
    { 
        "envMap": { type: "t", value: null },
        "flipEnvMap": { type: "f", value: 1.0 },
        "time": { type: "f", value: 0.0 },
        "noiseScale":{type: "f", value:0.0},
        "noiseDetail":{type: "f", value:0.0},
        "refractionRatio":{type: "f", value:2.0},
        "diffuse":{type: "v3", value:new THREE.Vector3(1.0,1.0,1.0)},
        "reflectivity":{type: "f", value:1.0}
      }
  ]);

    this.vertexShader = [

            "varying vec3 vReflect;",
            "uniform float refractionRatio;",

            "varying vec2 vUv;",

            "uniform float time;",

            "vec3 transformDirection( in vec3 normal, in mat4 matrix ) {",
            "   return normalize( ( matrix * vec4( normal, 0.0 ) ).xyz );",
            "}",
            "float luminance(vec3 c){",
            "    return dot(c, vec3(.2126, .7152, .0722));",
            "}",
            "void main(){",

            "   vUv = uv;",

            "   vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );",
            "   gl_Position = projectionMatrix * mvPosition;",
            "       vec3 objectNormal = normal;",
            "   vec4 worldPosition = modelMatrix * vec4( position, 1.0 );    ",
            "   vec3 worldNormal = transformDirection( objectNormal, modelMatrix );",
            "   vec3 cameraToVertex = normalize( worldPosition.xyz - cameraPosition );",
            // "    vReflect = refract( cameraToVertex, worldNormal, refractionRatio );",
            "   vReflect = reflect( cameraToVertex, worldNormal );",

            "}"

    ].join("\n");

    this.fragmentShader = [

            "uniform float reflectivity;",
            "uniform samplerCube envMap;",
            // "uniform sampler2D envMap;",
            "uniform float flipEnvMap;",
            "uniform float mixAmt;",

            "varying vec3 vReflect;",
            "varying vec2 vUv;",
            "uniform vec3 diffuse;",

            "float luminance(vec3 c){",
            "    return dot(c, vec3(.2126, .7152, .0722));",
            "}",
            "void main() {",
            "   vec3 outgoingLight = vec3( 0.0 );",
            "   vec4 diffuseColor = vec4( diffuse, 1.0 );",
            "   float flipNormal = ( -1.0 + 2.0 * float( gl_FrontFacing ) );",
            "   float specularStrength;",
            "   specularStrength = 1.0;",
            "   outgoingLight = diffuseColor.rgb;",

            "   vec3 reflectVec = vReflect;",

            // "   vec4 envColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );",
            // "    vec4 envColor = texture2D( map, vUv );",
            // "    envColor.xyz = inputToLinear( envColor.xyz );",
            // "   outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );",

            // "   gl_FragColor = vec4( outgoingLight, diffuseColor.a );",
            // "   gl_FragColor = vec4( 1.0, 0.0,0.0,1.0 );",
            // "   vec4 alpha = texture2D(map, vUv);",
            // "   vec4 s = texture2D(map2, vUv);",
            // "   vec4 t = vec4( outgoingLight, diffuseColor.a );",
            // "   vec4 col = mix(t, s, dot(alpha.rgb, vec3(1.0)/3.0));",
            // "   vec4 col = mix(s, alpha,  dot(s.rgb, vec3(1.0)/3.0));",
            // "   vec4 col = mix(alpha, s,  dot(luminance(s.rgb), 1.0/3.0));",
            // "   vec4 col = mix(alpha, s, dot(alpha.rgb, vec3(1.0)/3.0));",
            // "   vec4 col = mix(s, t, mixAmt);",
            "    gl_FragColor = textureCube( envMap, flipNormal * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );",

            "}"

        ].join("\n")
}