const scene = new THREE.Scene();
scene.background= new THREE.Color(0x2616161) ;
const CircleGeometry = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

var loader = new THREE.TextureLoader()
loader.load('./img/espacio.jpg', function(texture) {
	scene.background = texture
})
document.body.appendChild( renderer.domElement );

animate();
const geometry = new THREE.CircleGeometry( 5, 32 );
const material = new THREE.MeshBasicMaterial( { color: 0x98FF98, wireframe:true} );
const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

camera.position.z =20;


function animate() {
	requestAnimationFrame( animate );
	scene.rotation.x += 0.09;
	//camera.rotation.y += 0.0019;

	renderer.render( scene, camera );
}
animate();