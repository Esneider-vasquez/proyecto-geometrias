const scene = new THREE.Scene();
scene.background= new THREE.Color(0x4154F5) ;


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

document.body.appendChild( renderer.domElement );



const geometry = new THREE.CapsuleGeometry( 2, 2, 5, 9 );
const material = new THREE.MeshBasicMaterial( {color: 0xF4C6F6 
} );
const capsula = new THREE.Mesh( geometry, material );
scene.add( capsula );

camera.position.z =6;

function animate() {
	requestAnimationFrame( animate );
	capsula.rotation.x += 0.09;
	capsula.rotation.y += 0.0019;

	renderer.render( scene, camera );
}
animate();