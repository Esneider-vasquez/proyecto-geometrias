const scene = new THREE.Scene();
scene.background= new THREE.Color(0x4154F5);
{
	const color = 0x000000;  // white
	const near = 0.1;
	const far = 8;
	const density = 50;
	scene.fog = new THREE.Fog(color, near, far, density);
  }
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
var loader = new THREE.TextureLoader()
loader.load('./img/cafe.jpg', function(texture) {
	scene.background = texture
})
document.body.appendChild( renderer.domElement );




const geometry = new THREE.CapsuleGeometry( 2, 2, 5, 9 );
const textureLoader = new THREE.TextureLoader();
	const matcap = textureLoader.load('../img/luna.jpg');
	const material = new THREE.MeshMatcapMaterial( );
	material.matcap = matcap;
	material.flatShading = true;

const capsula = new THREE.Mesh( geometry, material );
scene.add( capsula );


const edges = new THREE.EdgesGeometry(geometry);
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( {color: 0xFFFFFF} ) );
scene.add( line );

camera.position.z =6;
function animate() {
	requestAnimationFrame( animate );
	capsula.rotation.x += 0.09;
	capsula.rotation.y += 0.0019;

	line.rotation.x += 0.09;
	line.rotation.y += 0.09;

	renderer.render( scene, camera );
}
animate();