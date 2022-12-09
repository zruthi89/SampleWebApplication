pipeline {
  agent any
        
  stages {
        
    stage('Build') {
      steps {
	 echo 'Build...'
         bat 'npm install'
         bat 'npm run build'
      }
    }  
           
    stage('Test') {
      steps {
	echo 'Test...'
	bat 'npm run test a'
      }
      post {
           success {
		script {
		  bat "exit 0"
		}
           }
           failure {
                script{
                   bat "exit 0"
                    }
                }
	}
    }

    stage('Deploy') {
       steps {
          echo 'Deploying....'
     }
    }
	  
  }
	
//    post {
//         failure {
//               mail to: 'zruthimurali@gmail.com',
//                  cc : 'zruthimurali@gamil.com',
//                 subject: "FAILED: Build ${env.JOB_NAME}", 
//                 body: "Build failed ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}.\n\nView the log at:\n ${env.BUILD_URL}\n\nBlue Ocean:\n${env.RUN_DISPLAY_URL}"
//         }
    
//     	success{
//             mail to: 'zruthimurali@gmail.com',
//                  cc : 'zruthimurali@gmail.com',
//                 subject: "SUCCESSFUL: Build ${env.JOB_NAME}", 
//                 body: "Build Successful ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}\n\nView the log at:\n ${env.BUILD_URL}\n\nBlue Ocean:\n${env.RUN_DISPLAY_URL}"
//         }
        
//         aborted{
//             mail to: 'zruthimurali@gmail.com',
//                  cc : 'zruthimurali@gmail.com',
//                 subject: "ABORTED: Build ${env.JOB_NAME}", 
//                 body: "Build was aborted ${env.JOB_NAME} build no: ${env.BUILD_NUMBER}\n\nView the log at:\n ${env.BUILD_URL}\n\nBlue Ocean:\n${env.RUN_DISPLAY_URL}"
//         }
//     }
}
