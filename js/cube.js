// THREE js cube for landing section
let viewport = document.getElementById("cube")

let visible = false

let xPos
let yPos

// Instantiate THREE js
let scene = new THREE.Scene();

let cameraSize = 400
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
    // Clamp mouse x y to -4 to 4
    xPos = (e.pageX / document.body.clientWidth) * 8 - 4
    yPos = (e.pageY / document.body.clientHeight) * 8 - 4
}

document.addEventListener("mousemove", translate, false)

// Create Cube
let geometry = new THREE.BoxBufferGeometry()

var material = new THREE.MeshPhongMaterial({
    color: 0xecf0f1,
    side: THREE.DoubleSide
});
var cube = new THREE.Mesh(geometry, material);
cube.rotation.x = Math.PI / 4
cube.rotation.y = Math.PI / 4
scene.add(cube);

// Create ambient light
var light = new THREE.AmbientLight(0xd5c1f8);
scene.add(light);

// Create directional light
var directionalLight = new THREE.DirectionalLight(0xffffff, 0.4);
directionalLight.position.set(1, 1, 1)
scene.add(directionalLight);

// Render loop
function render() {
    setTimeout(function () {
        requestAnimationFrame(render);
    }, 1000 / 60);
    renderer.render(scene, camera);

    // cube.rotation.x += 0.01;
    cube.rotation.z += 0.01;

    // Move camera towards target position
    if (xPos != undefined && yPos != undefined) {
        camera.position.x = lerp(camera.position.x, xPos, 0.04)
        camera.position.y = lerp(camera.position.y, yPos, 0.04)

        camera.lookAt(cube.position)
    }

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