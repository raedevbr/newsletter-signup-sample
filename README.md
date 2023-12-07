# Newsletter Signup

![preview](./public/image/preview-newsletter-signup.png)

### A web app project using Mailchimp API.
*This is an open-source **sample app** for learning purposes only.*


How to test on your local server:

1. Create a new **private** remote repository.
2. Create an account on [Mailchimp](https://mailchimp.com/) and explore the [API](https://mailchimp.com/developer/)
3. In '**app.js**' file change these values '**{..}**' with your own data from **Mailchimp**.

``` 
39    const url = "https://us{your_server_number}.api.mailchimp.com/3.0/lists/{your_list_id}";

41    const options = {
42        method: "POST",
43        auth: "{chooseAnyUsername}:{your_api_key}"
44     }; 
```
- Note that the **{your_server_number}** you can find at the final of your **api_key**

4. Save the local changes, type '**node app.js**' or '**nodemon app.js**' inside your **project path in terminal** and the server will start on port 3000.
5. Open any browser and type '**localhost:3000**'.

*Notice: you must host your repository as private, otherwise mailchimp will disable your api_key*

*Hope you enjoy it* 🙃      
*Feel free to open an issue and contribute with the project* ❤️   