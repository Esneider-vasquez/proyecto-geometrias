const scene = new THREE.Scene();
scene.background= new THREE.Color(0xA1B2C3);

var loader = new THREE.TextureLoader()
loader.load('./img/papel.jpg', function(texture) {
	scene.background = texture
})

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 19, 5, 32,  );
/*const material = new THREE.MeshBasicMaterial( {color: 0x000000 
} );*/

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load('./img/cafe.jpg');
const material = new THREE.MeshMatcapMaterial();
material.matcap = matcap;
material.flatShading = true;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
scene.add( line )
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z =33;
camera.position.y =-5;
camera.position.X = 12;

function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;

	line.rotation.x += 0.1;
	line.rotation.y += 0.1;
	renderer.render( scene, camera );
}
animate();