'use client'
import * as THREE from 'three'
import {Group, Mesh} from 'three'
import React, {Suspense, useEffect, useRef, useState} from 'react'
import {Canvas, useFrame} from '@react-three/fiber'
import {ContactShadows, Environment, Html, OrbitControls, useGLTF} from '@react-three/drei'

interface ModelProps {
    isOpen: boolean
    onLoad: any
}

function Model(props: ModelProps) {
    const group = useRef<Group>(null);
    const lidRef = useRef<Group>(null);
    // Load model
    const {nodes, materials} = useGLTF('models/macbook.glb')
    props.onLoad();
    // Make it float
    useFrame((state) => {
        const t = state.clock.getElapsedTime()
        if (group.current) {
            group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, Math.cos(t / 2) / 20 + 0.25, 0.1)
            group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, Math.sin(t / 4) / 5, 0.1)
            group.current.rotation.z = THREE.MathUtils.lerp(group.current.rotation.z, Math.sin(t / 8) / 30, 0.1)
            group.current.position.y = THREE.MathUtils.lerp(group.current.position.y, (-2 + Math.sin(t / 2)) / 3, 0.1)
        }
        if (lidRef.current) {
            const targetRotationX = props.isOpen ? -0.425 : Math.PI / 2; // Target rotation for the lid
            let speed = 0.02;
            if (lidRef.current.rotation.x > targetRotationX)
                speed /= 2;
            lidRef.current.rotation.x = THREE.MathUtils.lerp(lidRef.current.rotation.x, targetRotationX, speed);
        }
    })
    return (
        <group ref={group} {...props} dispose={null}>
            <group ref={lidRef} rotation={[Math.PI / 2, 0, 0]} position={[0, -0.04, 0.41]}>
                <group position={[0, 2.96, -0.13]} rotation={[Math.PI / 2, 0, 0]}>
                    <mesh material={materials.aluminium} geometry={(nodes['Cube008'] as Mesh).geometry}/>
                    <mesh material={materials['matte.001']} geometry={(nodes['Cube008_1'] as Mesh).geometry}/>
                    <mesh geometry={(nodes['Cube008_2'] as Mesh).geometry}>
                        <Html rotation-x={-Math.PI / 2} position={[0, 0.04, 0]} transform occlude>

                        </Html>
                    </mesh>
                </group>
            </group>
            <mesh material={materials.keys} geometry={(nodes.keyboard as Mesh).geometry} position={[1.79, 0, 3.45]}/>
            <group position={[0, -0.1, 3.39]}>
                <mesh material={materials.aluminium} geometry={(nodes['Cube002'] as Mesh).geometry}/>
                <mesh material={materials.trackpad} geometry={(nodes['Cube002_1'] as Mesh).geometry}/>
            </group>
            <mesh material={materials.touchbar} geometry={(nodes.touchbar as Mesh).geometry}
                  position={[0, -0.03, 1.2]}/>
        </group>
    )
}

export default function ModelView() {
    const [isOpen, setIsOpen] = useState(false);
    const hasToggled = useRef(false);

    const toggleLid = () => {
        setIsOpen(!isOpen);
    }

    const handleModelLoad = () =>  {
        useEffect(() => {
                const timer = setTimeout(() => {
                    if (!isOpen) toggleLid();
                }, 500);
                return () => clearTimeout(timer);
        }, []);
    }

    useEffect(() => {
        const handleScroll = () => {
            const threshold = 100;
            const currentPosition = window.scrollY;
            console.log(currentPosition)

            if (currentPosition > threshold && isOpen && !hasToggled.current) {
                toggleLid();
                hasToggled.current = true;
            } else if (currentPosition <= threshold && !isOpen && hasToggled.current) {
                toggleLid();
                hasToggled.current = false;
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, [isOpen]); // Depend on isOpen to make sure the toggle function behaves correctly


    return (
        <div style={{height: '60vh', width: '100%'}}>
            <Canvas camera={{position: [-3, 0, -16], fov: 55}}>
                <pointLight position={[10, 10, 10]} intensity={1.5}/>
                <Suspense fallback={null}>
                    <group rotation={[0, Math.PI, 0]} position={[0, 1, 0]}>
                        <Model isOpen={isOpen} onLoad={handleModelLoad}/>
                    </group>
                    <Environment preset="city"/>
                </Suspense>
                <ContactShadows position={[0, -4, 0]} scale={20} blur={2} far={4}/>
                <OrbitControls enablePan={false} enableZoom={false} minPolarAngle={Math.PI / 2.2}
                               maxPolarAngle={Math.PI / 2.2}/>
            </Canvas>
        </div>
    )
}
