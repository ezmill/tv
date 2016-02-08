var isMobile = false;
(function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))isMobile = true})(navigator.userAgent||navigator.vendor||window.opera);

var renderSize;
var container = document.getElementById("container");
var PATH = '../assets/';
var mouse = new THREE.Vector2(0.0, 0.0);
var time = 0.0;
var id;
var scene, camera, renderer, fbMaterial;
var material, geometry;
var debounceResize;
var renderTarget;
var textures = [];
var loadedItems = 0;
var loader = new THREE.TextureLoader();
var manager = new THREE.LoadingManager();
manager.onProgress = function ( item, loaded, total ) {

    console.log( item, loaded, total );

};
var FRAME, frameMat;
var METAL, HANDLE;
var LENS;
var objLoader = new THREE.OBJLoaderGEO(manager);
var images = [
    // PATH + "textures/IMG_3225.jpg",
    // PATH + "textures/IMG_3262.jpg",
    // PATH + "textures/IMG_3300.jpg",
    // PATH + "textures/IMG_3328.jpg",
    // PATH + "textures/IMG_3339.jpg",
    // PATH + "textures/IMG_3395.jpg",
    // PATH + "textures/IMG_3417.jpg",
    // PATH + "textures/IMG_3465.jpg",
    // PATH + "textures/IMG_3521.jpg",
    // PATH + "textures/IMG_3549.jpg",
    // PATH + "textures/IMG_3561.jpg",
    // PATH + "textures/name.jpg",

    // PATH + "textures/IMG_3728.jpg",
    // PATH + "textures/IMG_3763.jpg",
    // PATH + "textures/IMG_3798.jpg",
    // PATH + "textures/IMG_3839.jpg",
    // PATH + "textures/IMG_3954.jpg",
    // PATH + "textures/IMG_4236.jpg",
    // PATH + "textures/IMG_4336.jpg",
    // PATH + "textures/IMG_4380.jpg",
    // PATH + "textures/IMG_4404.jpg",
    // PATH + "textures/IMG_4492.jpg",
    // PATH + "textures/IMG_4498.jpg",
    // PATH + "textures/IMG_4594.jpg",
    // PATH + "textures/IMG_4608.jpg",
    // PATH + "textures/IMG_4616.jpg",
    // PATH + "textures/IMG_4691.jpg",
    // PATH + "textures/IMG_4742.jpg",
    // PATH + "textures/IMG_4745.jpg",
    // PATH + "textures/IMG_4779.jpg",
    // PATH + "textures/IMG_4816.jpg",
    // PATH + "textures/IMG_4857.jpg",
    // PATH + "textures/IMG_4890.jpg",
    // PATH + "textures/IMG_4921.jpg",
    // PATH + "textures/IMG_4942.jpg",
    // PATH + "textures/IMG_4953.jpg",
    // PATH + "textures/IMG_4988.jpg",
    // PATH + "textures/IMG_5009.jpg",
    // PATH + "textures/IMG_5126.jpg",
    // PATH + "textures/IMG_5413.jpg",
    // PATH + "textures/IMG_5470.jpg",
    // PATH + "textures/IMG_5474.jpg",
    PATH + "textures/info.jpg",
    PATH + "textures/clouds.jpg",

    // PATH + "textures/IMG_5501.jpg",
    // PATH + "textures/IMG_5587.jpg",
    // PATH + "textures/IMG_6373.jpg",
    // PATH + "textures/dogs.png",
]
var capturer = new CCapture( { framerate: 60, format: 'webm', workersPath: 'js/' } );
var screensaver;
var testCubeLoader = new THREE.CubeTextureLoader();
var urls = [
    PATH + "textures/studio1/px.png",
    PATH + "textures/studio1/nx.png",
    PATH + "textures/studio1/py.png",
    PATH + "textures/studio1/ny.png",
    PATH + "textures/studio1/pz.png",
    PATH + "textures/studio1/nz.png"
]
// var testCube = new THREE.CubeTexture(urls);
var testCube = THREE.ImageUtils.loadTextureCube(urls);
testCube.minFilter = testCube.magFilter = THREE.LinearFilter;
var texturePlanes = [];
// var testCube = testCubeLoader.load(urls, function(){
    init();    
// });


function init() {
    
    setRenderSize();

    scene = new THREE.Scene();

    renderer = new THREE.WebGLRenderer({
        preserveDrawingBuffer: true
    });
    renderer.setSize(renderSize.x, renderSize.y);
    renderer.setClearColor(0xffffff, 1.0);
    // camera = new THREE.Camera();
    camera = new THREE.OrthographicCamera( renderSize.x / - 2, renderSize.x / 2, renderSize.y / 2, renderSize.y / - 2, -100000, 100000 );
    // camera = new THREE.PerspectiveCamera( 45, renderSize.x/renderSize.y, 0.001, 100000 );
    // camera.position.z = 1800;
    camera.position.z = 6790.470546339423;
    // camera.position.z = 1629.0124999999796;
    // camera.position.z = 1547.5618749999876;
    camera2 = new THREE.Camera();
    camera2.position.z = 1;

    // controls = new THREE.OrbitControls(camera);

    container.appendChild(renderer.domElement);

    loadTextures();

    debounceResize = debounce(onWindowResize, 250);
    window.addEventListener("resize", debounceResize);
    document.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener('touchstart', onDocumentTouchStart, false);
    document.addEventListener('touchdown', onDocumentTouchStart, false);
    document.addEventListener('touchmove', onDocumentTouchMove, false);
    document.addEventListener('keydown', function(){screenshot(renderer)}, false);

}
function loadTextures(){
    for(var i = 0; i < images.length; i++){
        var texture = loader.load(images[i], checkLoading);
        texture.minFilter = texture.magFilter = THREE.LinearFilter;
        addTexture(texture, i);
    }
}
function addTexture(texture, index){
    textures[index] = texture;
}

function checkLoading(){
    ++loadedItems;
    if(loadedItems >= images.length){
        createMagnifyingGlass();
    }
}
function onProgress(xhr) {
    if ( xhr.lengthComputable ) {
        var percentComplete = xhr.loaded / xhr.total * 100;
        // console.log( Math.round(percentComplete, 2) + '% downloaded' );
    }

};
function onError(xhr) {};

function createMagnifyingGlass(){

    magnifyingGlass = new MagnifyingGlass(scene, camera, renderer, textures);


    objLoader.load(PATH + "models/metal.obj", function(object) {
        METAL = object;
        METAL.scale.set(100,100,100);
        METAL.position.z = 1500;
        METAL.children[0].geometry.mergeVertices();
        METAL.children[0].geometry.computeFaceNormals();
        METAL.children[0].geometry.computeVertexNormals(true);
        metalMat = new THREE.MeshBasicMaterial({
            color:0xffffff, 
            envMap: testCube
        })
        METAL.children[0].material = metalMat;

        scene.add(METAL);
    }, onProgress, onError);
    objLoader.load(PATH + "models/handle.obj", function(object) {
        HANDLE = object;
        HANDLE.scale.set(100,100,100);
        HANDLE.position.z = 1500;
        HANDLE.children[0].geometry.mergeVertices();
        HANDLE.children[0].geometry.computeFaceNormals();
        HANDLE.children[0].geometry.computeVertexNormals(true);
        handleMat = new THREE.MeshBasicMaterial({
            color:0x000000, 
            // map: testCube
        })
        HANDLE.children[0].material = handleMat;

        scene.add(HANDLE);
    }, onProgress, onError);

    objLoader.load(PATH + "models/glass2.obj", function(object) {
        LENS = object;
        console.log(LENS);

        magnifyingGlass.init();
        createMultipassMaterial();

    }, onProgress, onError);



}

function createMultipassMaterial(){
    shaders = [
        new AShader(),
        new BShader(),
        new OUTPUTShader(),
    ]
    uniforms = {
        "FRAME": 0.0,
        "mouse": mouse,
        "resolution": renderSize,
        "time": 0.0
    }
    mMaterial = new MultipassMaterial(renderer, scene, camera2, textures[1], shaders);
    mMaterial.init();
    mMaterial.setUniforms(uniforms);

    geometry = new THREE.PlaneGeometry(renderSize.x*1.0, renderSize.y*1.0);
    material = new THREE.MeshBasicMaterial({
        // map: textures[0],
        map: mMaterial.buffers[2].renderTarget,
        side: THREE.DoubleSide
    })
    mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    mesh.position.z = 0;
    // for(var i = 0; i < 1; i++){
        // texturePlanes[i] = new TexturePlane(scene, camera, renderer, textures[i], Math.random())
        // texturePlanes[i].init();
    // }
    magnifyingGlass.refractionPlaneMaterial.uniforms["map"].value = mMaterial.buffers[2].renderTarget;
    // screensaver.refractionPlaneMaterial.uniforms["map"].value = textures[1];

    animate();
}
function animate() {
    id = requestAnimationFrame(animate);
    draw();
}

function draw() {
   
    time += 0.01;    

    magnifyingGlass.update();

    magnifyingGlass.refractionPlane.visible = false;
    // texturePlanes[0].mesh.visible = true;
    // mesh.visible = false;
    magnifyingGlass.cubeCamera.position.copy( new THREE.Vector3(METAL.position.x, METAL.position.y, (METAL.position.z - 50))  );
    // screensaver.cubeCamera.position.copy( new THREE.Vector3(0,0,999) );
    magnifyingGlass.cubeCamera.updateCubeMap( renderer, scene );

    //Render the scene
    magnifyingGlass.refractionPlane.visible = true;
    // texturePlanes[0].mesh.visible = false;
    // mesh.visible = true;

    // for(var i = 0; i < texturePlanes.length; i++){
        // texturePlanes[i].update();
    // }

    uniforms["time"] = time;    
    uniforms["FRAME"] += 1.0;    
    // uniforms["mouse"].x = mouse.x;
    uniforms["mouse"].x = 0.001388888888888884;
    // uniforms["mouse"].x = Math.sin(time)*0.1;
    // uniforms["mouse"].y = mouse.y;
    uniforms["mouse"].y = 0.35686274509803917; 
    // uniforms["mouse"].y = Math.cos(time)*0.1;

    // screensaver.refractionPlaneMaterial.uniforms["map"].value = mMaterial.buffers[2].renderTarget;

    mMaterial.update();
    mMaterial.setUniforms(uniforms);

    renderer.render( scene, camera );

    // renderer.render(scene, camera);

    capturer.capture( renderer.domElement );

}
function render(){
    // fbMaterial.update();
    // renderer.render(scene, camera);
    // fbMaterial.getNewFrame();
    // fbMaterial.swapBuffers();
}

function onMouseMove(event) {
    mouse.x = (event.pageX / renderSize.x) * 2 - 1;  
    mouse.y = -(event.pageY / renderSize.y) * 2 + 1;
}
function onMouseDown() {

}

function onDocumentTouchStart(event) {
    updateMouse(event);
}

function onDocumentTouchMove(event) {
    updateMouse(event);
}

function updateMouse(event) {
    if (event.touches.length === 1) {
        event.preventDefault();
        mouse.x = (event.touches[0].pageX / renderSize.x) * 2 - 1;
        mouse.y = -(event.touches[0].pageY / renderSize.y) * 2 + 1;
    }
}

function onWindowResize(event) {
    setRenderSize();
    renderer.setSize(renderSize.x, renderSize.y);
}

function setRenderSize(){
    renderSize = new THREE.Vector2(window.innerWidth, window.innerHeight);
    // renderSize = new THREE.Vector2((window.innerHeight*2448)/3246, window.innerHeight);
    // renderSize = new THREE.Vector2(window.innerWidth, (window.innerWidth*3246)/2448);
}
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}
function screenshot(renderer) {
    if (event.keyCode == "32") {
        grabScreen(renderer);

        function grabScreen(renderer) {
            var blob = dataURItoBlob(renderer.domElement.toDataURL('image/png'));
            var file = window.URL.createObjectURL(blob);
            var img = new Image();
            img.src = file;
            img.onload = function(e) {
                window.open(this.src);

            }
        }
        function dataURItoBlob(dataURI) {
            var byteString;
            if (dataURI.split(',')[0].indexOf('base64') >= 0)
                byteString = atob(dataURI.split(',')[1]);
            else
                byteString = unescape(dataURI.split(',')[1]);

            var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

            var ia = new Uint8Array(byteString.length);
            for (var i = 0; i < byteString.length; i++) {
                ia[i] = byteString.charCodeAt(i);
            }

            return new Blob([ia], {
                type: mimeString
            });
        }

        function insertAfter(newNode, referenceNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }
    }
    if (event.keyCode == "82") {
        capturer.start();
    }
    if (event.keyCode == "84") {
        capturer.stop();
        capturer.save(function(blob) {
            // window.location = blob;
            window.open(blob);
            // console.log(blob);
        });
    }
}