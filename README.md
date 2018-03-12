# Demo Steps

1. Fn apps delete myapp
2. mkdir functionsbasic
3. cd functionsbasic
4. fn init --runtime go hello
5. Cd hello 
6. . Find
7. Open the folder in vs code
8. Look inside the go function
9. Fn run
10 . Fn deploy --app myapp --local
11. fn routes list myapp
12. fn call myapp hello
13. cURL http://localhost:8080/r/myapp/hello
14. fn init --runtime node hellonode
15. cd hellonode
16. Open vs write the node function
17. fn deploy --app myapp --local 
18. fn routes list myapp
19. create input.json
20. cat input.json
21. cat input.json | fn call my app hellonode
22. cat input.json | fn call my app hello
23. cd hello
24. fn test
25. copy test.json to the node app.
26. cd hellonode
27. fn test
