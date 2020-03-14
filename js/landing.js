// THREE js cube for landing section
let viewport = document.getElementById("cube")

let visible = false

let xPos
let yPos

// Instantiate THREE js
let scene = new THREE.Scene();

let cameraSize = 200
let cameraWidth = viewport.clientWidth / cameraSize
let cameraHeight = viewport.clientHeight / cameraSize
let camera = new THREE.OrthographicCamera(-cameraWidth, cameraWidth, cameraHeight, -cameraHeight, 0.1, 100);

camera.position.z = 2;

let renderer = new THREE.WebGLRenderer({
    canvas: viewport,
    alpha: true,
    antialias: true
});
renderer.setSize(viewport.clientWidth, viewport.clientHeight);

// Handel window resize
function resize(e) {
    console.log("resize camera")

    viewport.style.width = "100%"
    viewport.style.height = "500px"

    renderer.setSize(viewport.clientWidth, viewport.clientHeight);

    cameraWidth = viewport.clientWidth / cameraSize
    cameraHeight = viewport.clientHeight / cameraSize

    camera.left = -cameraWidth
    camera.right = cameraWidth
    camera.top = cameraHeight
    camera.bottom = -cameraHeight
    camera.updateProjectionMatrix();
}
window.addEventListener("resize", resize, false)

// Position camera based on mouse position
function translate(e) {
    // Clamp mouse x y to -1 to 1
    xPos = (e.pageX / document.body.clientWidth) * 2 - 1
    yPos = (e.pageY / document.body.clientHeight) * 2 - 1

    xPos *= 2
    yPos *= 2
}

document.addEventListener("mousemove", translate, false)

// Load GLTF Model
let loader = new THREE.GLTFLoader();
let mixer

loader.load("./assets/cube.glb",
    // called when the resource is loaded
    function (gltf) {
        // Add scene to three js
        scene.add(gltf.scene);

        // Add animations
        mixer = new THREE.AnimationMixer(gltf.scene);
        var action = mixer.clipAction(gltf.animations[0]);
        action.play()
    },
    // called while loading is progressing
    function (xhr) {
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
    },
    // called when loading has errors
    function (error) {
        console.log('An error happened');
    })

// Create ambient light
var light = new THREE.AmbientLight(0xd5c1f8, 0.6);
scene.add(light);

// Create directional light
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight);

// Animation clock
let clock = new THREE.Clock();

// Render loop
function render() {
    // Lock to 60fps
    setTimeout(function () {
        requestAnimationFrame(render);
    }, 1000 / 60);
    renderer.render(scene, camera);

    // Move camera towards target position
    if (xPos != undefined && yPos != undefined) {
        camera.position.y = lerp(camera.position.y, yPos, 0.04)

        camera.lookAt(new THREE.Vector3(0, 0, 0))
    }

    // Play animation
    var delta = clock.getDelta();
    if (mixer) mixer.update(delta);

    if (!visible) {
        visible = true
        viewport.classList.add("fade-in")
    }
}
render();

// Linear Interpolation helper function
function lerp(v0, v1, t) {
    return v0 * (1 - t) + v1 * t
}