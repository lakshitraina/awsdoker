http://3.107.15.112

# Docker + AWS EC2 Deployment

📌 **Project Description**

This project is a simple web application (Glassmorphism Calculator) built using HTML, CSS, and JavaScript. 
It is containerized using Docker and deployed on an AWS EC2 instance.

🐳 **Docker Commands**

```bash
docker build -t lakshitraina/webapp .

docker login

docker push lakshitraina/webapp
```

☁️ **AWS EC2 Deployment**

```bash
docker pull lakshitraina/webapp

docker run -d -p 80:80 lakshitraina/webapp
```

🌐 **Live URL**

[http://3.107.15.112](http://3.107.15.112)

📸 **Screenshots**

### ✅ Docker build success
![Docker Build Success](docker_build.png)

### ✅ Docker push success
![Docker Push Success](pushed.png)

### ✅ EC2 terminal running container
![EC2 Running](ec2_terminal.png)

### ✅ Website opened in browser
![Website Screenshot](deployed.png)

---
*Deployed with ❤️ by Lakshit*
