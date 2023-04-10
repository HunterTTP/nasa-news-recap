function addGlobeToScene() {
    createGlobe();
    scene.add(globe);
}

function createGlobe() {
    const globeGeometry = new THREE.SphereGeometry(1, 32, 32);
    const globeTexture = new THREE.TextureLoader().load('/static/textures/mars.jpg');
    const globeMaterial = new THREE.MeshPhongMaterial({ map: globeTexture });
    globe = new THREE.Mesh(globeGeometry, globeMaterial);
}
