const scene = new THREE.Scene();
scene.background= new THREE.Color(0x2ECC71) ;
const CircleGeometry = new THREE.Scene()

const camera = new THREE.PerspectiveCamera(75, window.innerWidth/ window.innerHeight, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

/*
var loader = new THREE.TextureLoader()
loader.load('./img/Agua.jpg', function(texture) {
    scene.background = texture
})
*/

document.body.appendChild( renderer.domElement );
{
    const color = 0x000000;  // white
    const near = 2;
    const far = 60;
    const density = 90;
    scene.fog = new THREE.Fog(color, near, far, density);
  }

/*
const geometry = new THREE.CircleGeometry( 12, 12, 12 );

const textureLoader = new THREE.TextureLoader();
    const matcap = textureLoader.load('../img/papel.jpg');
    const material = new THREE.MeshMatcapMaterial( );
    material.matcap = matcap;
    material.flatShading = true;

const circle = new THREE.Mesh( geometry, material );
scene.add( circle );

*/



// CONSTANTES DE LOS CUBOS

//Cubo 1
const cube1 =new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new  THREE.MeshBasicMaterial({color:0xff0000})
);
cube1.position.set(5, 0, 0)


//cubo 2
const cube2 =new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new  THREE.MeshBasicMaterial({color:0xff0000})
);
cube2.position.set(9, 0, 0)


//cubo 3
const cube3 =new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new  THREE.MeshBasicMaterial({color:0xff0000})
);
cube1.position.set(0, 0, 0)

const cube4 =new THREE.Mesh(
    new THREE.BoxGeometry(2, 2, 2),
    new  THREE.MeshBasicMaterial({color:0xff0000})
);
cube4.position.set(0, 0, 0)

scene.add(cube1, cube2, cube3, cube4);

//DragContol
var objetos =[cube1, cube2, cube3, cube4];
const dControls = new THREE.DragControls(objetos, camera, renderer.domElement );
dControls.deactivate();
dControls.activate();

    dControls.addEventListener("hoveron",function (event){
        //console.log(event.object);
        event.object.material.wireframe = true;
        event.object.scale.x *=4;
    });
    dControls.addEventListener("hoveroff",function (event){
        event.object.material.wireframe = false;
        event.object.scale.x /=4;
    });
//Flycontrol
const flyControls = new THREE.FlyControls( camera, renderer.domElement);

flyControls.movementSpeed =50;
flyControls.rollspeed =0.01;
flyControls.autoForward =false;
flyControls.dragToLock =false;
//Fin Flycontrol

camera.position.z =8;

cube1.position.x= 3;
cube2.position.x=-3;
cube3.position.X=5;
cube4.position.x=6;
cube4.position.y=1;

function animate() {
    requestAnimationFrame( animate );
    renderer.render( scene, camera );
    cube1.rotation.x +=0.01;
    cube2.rotation.x +=0.01;
    cube3.rotation.x +=0.01;
    cube4.rotation.x +=0.01;

    cube1.rotation.y +=0.01;
    cube2.rotation.y +=0.01;
    cube3.rotation.y +=0.01;
    cube4.rotation.y +=0.01;
    
    cube1.rotation.z +=0.01;
    cube2.rotation.z +=0.01;
    cube3.rotation.z +=0.01;
    cube4.rotation.z +=0.01;
    
    flyControls.update(0.59);
}
animate();
