[YouTube](https://youtu.be/Pxww1WaqPRc)
[Transcript](https://docs.google.com/document/d/1pWVeweTtD9h8itk3WRxrUKmP9A5gAVF_dAY3ckvy4tM/edit?usp=sharing)


# WebGL/Three.js (Transcript)
# WebGL

JavaScript API for rendering high-performance interactive 3D and 2D graphics in browser.

Mostly, it’s used for creating interactive 3D experiences in web.

To draw a 3D model you have to draw many triangles at the right position and colorize them properly. WebGL renders many-many triangles in an HTML <canvas> at a remarkable speed.

Each triangle has 3 points. 

1) GPU calculates the position of these points.  

2) Then GPU draws each visible pixel of those triangles. 

The instructions how to place the points and draw the pixels are written in **shaders**. And we need to provide data to these shaders: points positions, model transformation, camera coordinates. We also need to provide data to help colorize the pixels. 

### Brief overview of how WebGL works:

1. **Integration**: WebGL is integrated with the HTML5 canvas element. Canvas provides a drawing surface for rendering graphics.
2. **Context Creation**: The WebGL context is created using JavaScript code. It allows communication between the application and the GPU.
3. **Shaders**: They define how the objects in the scene are rendered, including their shape, color, and lighting effects.
4. **Data Buffering**: The application prepares and sends data to the GPU. This data is stored in buffers, which are accessed by the shaders during rendering.
5. **Rendering Pipeline**: The rendering pipeline consists of several stages. The shaders are executed during these stages to calculate the final appearance of each pixel on the screen.
6. **Rendering Output**: The final rendered image is displayed on the HTML canvas.

# Three.js

JavaScript library that works right above WebGL, and is used for creating and displaying 3D graphics in web browsers. 

Three.js enables you to apply textures and materials to your objects. It also provides various light sources to illuminate your scene, advanced postprocessing effects, custom shaders, etc. You can load objects from 3D modeling software or create your own.

With much less code, you can create anything.

# Getting started w Three.js

Let’s start with the most basic Three.js scene, it’s a “Hello world!” in Three.js — cube.

First of all you have to install the library. There are several ways, all of them are described in the documentation, nothing unusual.

Every Three.js project needs at least one HTML file, and a JavaScript file to run your three.js code.  To display anything with three.js, we need three things: **scene**, **camera** and **renderer**. 

Scene is like a container. You place objects, models, particles, lights, also camera, and then you ask Three.js to render that scene. 

The camera is not visible. When we do a render, the scene will be rendered from that camera's point of view. You can have multiple cameras just like on a movie set, and you can switch between cameras. 

The renderer's job is to do the render. That’s simple.

# Objects

To render somethig we need this something — 3D Objects.

To create that red cube, we need to create a type of object named Mesh. **Mesh** is the combination of a geometry and a material.

To create the **geometry**, we use the BoxGeometry class with 3 parameters.

To create the **material**, we use the MeshBasicMaterial class with one parameter. All we need is to specify its color property.

To create the final mesh, we use the Mesh class and send the geometry and the material as parameters. So now just add the mesh to the scene by using the **`add(...)`** method.

Animations in Three.js work with requestAnimationFrame(). The only thing you have to do is to move render() method to animation function, so the scene and camera could update every single frame.

Now let’s have a look at Scene Graph. It is a representation of the tree-like structure that Three.js scene implements, and may help to clarify a little bit how it works and what we just did.

Scene — root of the scene, mesh — scene graphic object = geometry + material, geometry is made of verices and faces (polygons). Material can be executed with texture and image, or it can be a plain color. Camera, mesh, light — all need to be added to the scene to work. And then Render renders the whole scene. 

Simple as it is!

# Real-world application

**Game Development:** Three.js can be used to create browser-based games with 3D graphics.

**Virtual Reality (VR) and Augmented Reality (AR):** Three.js can be integrated with VR and AR frameworks to build immersive virtual and augmented reality experiences.

**Data Visualization:** Three.js can be used to visualize and present complex data in a 3D environment, making it easier to understand and analyze.

**Product Configurators:** Three.js can be used to create interactive product configurators, allowing users to customize and visualize products in real-time, such as cars, furniture, or clothing.

**Architectural Visualization:** Three.js can be used to create interactive 3D visualizations of architectural designs, allowing users to interact with virtual buildings and environments.

**Educational and Learning Tools:** Three.js can be used to create interactive educational tools and simulations, making learning more engaging and interactive for students.

**Creative and Artistic Projects:** Three.js provides a platform for artists and creative professionals to experiment with 3D graphics and create visually stunning and interactive web-based artworks and installations.