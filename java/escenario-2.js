const scene = new THREE.Scene();
scene.background= new THREE.Color(0x2616161);
const CircleGeometry = new THREE.Scene();

var loader = new THREE.TextureLoader()
loader.load('.	./img/ladrillo.jpg', function(texture) {
	scene.background = texture
})
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometria

	const geometry = new THREE.SphereGeometry( 15, 32, 16 );

	//textura para la geometria
	const textureLoader = new THREE.TextureLoader();
	const matcap = textureLoader.load('../img/madera.jpg');
	const material = new THREE.MeshMatcapMaterial( );
	material.matcap = matcap;
	material.flatShading = true;

	const sphere = new THREE.Mesh( geometry, material );
	scene.add( sphere );

// fin geometria
camera.position.z =30;

const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {color: 0x000000} ) );
scene.add( line );



function animate() {
	requestAnimationFrame( animate );
	sphere.rotation.x +=0.01;
	sphere.rotation.y +=0.01;
	sphere.rotation.z +=0.01;

	line.rotation.x +=0.01;
	line.rotation.y +=0.01;
	line.rotation.z +=0.01;
	renderer.render( scene, camera );
}
animate();