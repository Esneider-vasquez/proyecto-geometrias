const scene = new THREE.Scene();
scene.background= new THREE.Color(0x2ECC71) ;
const CircleGeometry = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

var loader = new THREE.TextureLoader()
loader.load('./img/Agua.jpg', function(texture) {
	scene.background = texture
})

document.body.appendChild( renderer.domElement );
{
	const color = 0x000000;  // white
	const near = 2;
	const far = 60;
	const density = 90;
	scene.fog = new THREE.Fog(color, near, far, density);
  }


const geometry = new THREE.CircleGeometry( 12, 12, 12 );

const textureLoader = new THREE.TextureLoader();
	const matcap = textureLoader.load('../img/papel.jpg');
	const material = new THREE.MeshMatcapMaterial( );
	material.matcap = matcap;
	material.flatShading = true;

const circle = new THREE.Mesh( geometry, material );
scene.add( circle );


const edges = new THREE.CircleGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0x000000 } ) );
camera.position.z =31;

function animate() {
	requestAnimationFrame( animate );
	circle.rotation.x += 0.09;
	circle.rotation.y += 0.0019;

	line.rotation.x += 0.09;
	line.rotation.y += 0.09;
	renderer.render( scene, camera );
}
animate();
