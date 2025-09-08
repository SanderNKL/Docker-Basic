# Getting Started
## Install Docker
[Download docker](https://www.docker.com/products/docker-desktop/)

## Start docker in the terminal
```zsh
docker run -dp 80:80 docker/getting-started
```

## Open the app in the browser
http://localhost

## Hurray!
You have now ran your very first docker project!

# How Docker Works
Docker works by creating containers and images that contain code, runtime and the necessary tools to run your application.

You can describe a container and image as:
- Container: A container runs an image.
- Image: An image contains all of the code, runtime, configuration and tools necessary to run.

# How is this useful?
## Docker Vs Without
Before Docker, developers had to create artifacts and detailed setup instructions for the operations team to run the code on a server. This was tedious because different operating systems and environments often required different installation steps. As a result, something that worked on one machine might fail on another, making testing and deployment difficult.

Docker solves this by creating images that contain everything needed to run the application:
- Application code
- Runtime (e.g., Python, Node.js, Java)
- Environment variables
- Dependencies and tools

Whether your application is a database, website, API, or something else, you can package it in a Docker image. Once the image is built, it can be sent to the operations team or other developers, and it will run consistently “out of the box” on any host with Docker installed.

This approach saves a tremendous amount of time, allows developers and operations teams to collaborate more effectively, and makes testing and deployment much faster and more reliable.

# Is docker like virtualization?
Yes and no. (What?!?). Hold on, hold on...

Both Docker containers and virtual machines (VMs) isolate applications from the host system, and both let you run multiple “environments” on a single physical machine. At first glance, they might look similar, but under the hood they’re very different.

## How Docker is different
Docker does not run a full operating system inside each container. Instead, it shares the host machine’s OS kernel, which makes it lightweight. Because of this, Docker containers start in seconds and take up far less storage than VMs, which often require gigabytes for the guest OS and can take minutes to boot. Docker packages everything your application needs (code, libraries, runtime, environment variables) into a single image that runs consistently across any host with Docker installed.

## But I've heard Docker uses linux?
Yes! Docker relies on Linux kernel features to isolate and manage containers.
- On Linux: Docker runs directly on the host OS.
- On Windows or macOS: Docker runs a tiny Linux VM in the background, and your containers run inside it.

If you're using Windows or Mac, you are required to download 'Docker Desktop' which runs and manages a tiny linux vm.

# How your OS is relevant
Your OS (Windows, macOS, Linux) is still the host, and manages CPU, memory, disk, and networking for Docker. (On Linux, your OS is also the Linux kernel Docker uses, so there’s no extra layer.)

On Windows/macOS, your OS just runs a tiny Linux VM for Docker to use. Your OS itself doesn’t run the container code, but it still provides the resources and environment.

