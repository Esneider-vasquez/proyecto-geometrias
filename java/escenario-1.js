
// creamos un valor de escenario

const scene = new THREE.Scene();
scene.background= new THREE.Color(0xA1B2C3);

var loader = new THREE.TextureLoader()
loader.load('./img/singapur.jpg', function(texture) {
	scene.background = texture
})

// le damos una camara para que quede con perspectiva------tambien se le pone un numero de profundidad (75), 
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
// window.innerWidth, window.innerHeight es el alto y ancho de la pantalla a la que se le va a arenderizar 
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

const geometry = new THREE.BoxGeometry( 3, 3, 3 );
const material = new THREE.MeshBasicMaterial( {color: 0x000000 
} );
const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

camera.position.z =15;
camera.position.y =-5;
camera.position.X = 12;



function animate() {
	requestAnimationFrame( animate );
	cube.rotation.x += 0.1;
	cube.rotation.y += 0.1;
	
	renderer.render( scene, camera );
}
animate();