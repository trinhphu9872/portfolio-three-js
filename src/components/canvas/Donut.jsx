import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const DonutCanvas = () => {
    const containerRef = useRef();


    useEffect(() => {
        // Scene setup
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

        // Renderer setup
        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth - 100, window.innerHeight - 100);
        renderer.setClearAlpha(0);
        containerRef.current.appendChild(renderer.domElement);

        // Donut setup
        const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
        const material = new THREE.MeshBasicMaterial({ color: 0x4070f4, opacity: 0.1 }); // Định nghĩa màu sắc, ví dụ: xanh dương
        const donut = new THREE.Mesh(geometry, material);
        scene.add(donut);

        // Camera position
        camera.position.z = 30;

        // Animation function
        const animate = function () {
            requestAnimationFrame(animate);

            // Rotations
            donut.rotation.x += 0.01;
            donut.rotation.y += 0.01;

            // Render the scene
            renderer.render(scene, camera);
        };

        // Start the animation
        animate();

        // Responsive to window resize
        const onWindowResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth - 100, window.innerHeight - 100);
        };

        // Add event listener for window resize
        window.addEventListener('resize', onWindowResize, false);

        // Clean up on component unmount
        return () => {
            window.removeEventListener('resize', onWindowResize);
            containerRef.current.removeChild(renderer.domElement);
        };
    }, []);

    return <div ref={containerRef} style={{ width: '50%', height: '50%' }} />;
};

export default DonutCanvas;
