const scene = new THREE.Scene();
scene.background = new THREE.Color();

var loader = new THREE.TextureLoader();
loader.load('./img/fondo_estrellas.jpg', function(texture){
  scene.background = texture;

})

const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.2, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 15, 5, 89, 36 );
const material = new THREE.MeshStandardMaterial( { color: 0xA1b0d2a } );
const torusKnot = new THREE.Mesh( geometry, material );
material.metalness = 0.4;
material.roughness = 0.5;

const directionalLight = new THREE.DirectionalLight( 0xF0FF33,43 );
scene.add( directionalLight );
scene.add( torusKnot );

camera.position.z = 65;
camera.position.x = -2;

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./img/papel.jpg')
material.matcap = matcap;
material.flatShading = true


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line );


function animate() {
  requestAnimationFrame( animate );
    torusKnot.rotation.x += 0.01;
    torusKnot.rotation.y += 0.01;
    
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;

  renderer.render( scene, camera );
};

animate();