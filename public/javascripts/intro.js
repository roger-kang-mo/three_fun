$(document).ready(function(){

  var scene = new THREE.Scene();
  var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
  var renderer = new THREE.WebGLRenderer();

  var geometry = new THREE.BoxGeometry(1,1,1);
  var material = new THREE.MeshBasicMaterial({color: 0xcccccc});
  var cube = new THREE.Mesh(geometry, material);

  renderer.setSize( window.innerWidth, window.innerHeight );
  document.body.appendChild( renderer.domElement );

  scene.add(cube);

  camera.position.z = 5;

  var render = function() {
    requestAnimationFrame(render);

    animationChanges();

    renderer.render(scene, camera);
  };

  var animationChanges = function() {
    cube.rotation.x += 0.001;
    cube.rotation.y += 0.01;
  };

  render();
});
