![home imge](https://github.com/chessrajat/rajattyagi/blob/gh-pages/img/projects/upasswords.jpg?raw=true)

# Password Generator using Python

> 23 Jan 2021  
> Python

Hey , everyone so. How to build a password generator in python?
we will first start by setting up our python virtual environment
- create a directory PasswordGenerator
- `python -m venv venv`

create a file [Main.py](https://github.com/chessrajat/Python_MiniProjects/blob/master/PasswordGenerator/Main.py)

    def  generate_password(length):
		small_alpha =  "abcdefghijklmnopqrstuvwxyz"
		big_alpha = small_alpha.upper()
		numbers =  "01234456789"
		special_chrs =  "!@#$$%^&*()"
		characters = small_alpha+big_alpha+numbers+special_chrs
		password =  ""
		for _ in  range(length):
			password += random.choice(characters)
		return password

Here is a simple generate password function we are using it takes length as a parameter and generate a random password with that length.
- creating four variables `small_alpha, big_alpha, numbers,special_chrs ` you can add character as you want.
- combining all the characters and store it in characters variable.
- Now in for loop , we are using `random.choice(characters)` to get a random char from this big character string and adding it to password variable and return it.

You can call this function directly like `generate_password(10)` and it will give you a password like.
	t44K)jV(yx
	vb(bOnc!@J

**Password generator 2**
Until now the password we are generating are kind of gibberish , so now we are going to generate password with some real words.

    def  generate_password2():
		with  open("./PasswordGenerator/random_words.json", "r") as f:
			words = f.read()  
			words = json.loads(words)	  
		numbers =  "01234456789"
		special_chrs =  "!@#$$%^&*()"
		all_chrs = numbers+special_chrs
		password =  ""
		password += random.choice(words)
		password += random.choice(numbers)
		password += random.choice(all_chrs)
		password += random.choice(special_chrs)
		password += random.choice(words)	  
		return password

- In this function we are reading a file random_words.json that has a list of random words. you can find this file in the git repo [Here](https://github.com/chessrajat/Python_MiniProjects/tree/master/PasswordGenerator)
- so what we are doing here is we are getting a random word from the array then random number , then random number or special character and then special character and then again a random number.
- we are doing this to make our password stronger you can also add any kind of complexity you guys want.

You can also call this function directly as above one it will give you passwords like.
unintegrated72)rodman
likely4$#floppy

These passwords are bit easy to remeber than the old one and you can use these easily.

we are calling these functions separately lets build a main function that will take argument which function to run to generate password.

    if  __name__=="__main__":

		pass_type = sys.argv[1]
		if pass_type ==  "a":
			length =  int(sys.argv[2])
			password =  generate_password(length)
			print(password)
		elif pass_type ==  "b":
			password =  generate_password2()
			print(password)
		else:
			print("Argument input should be 'a' or 'b'")

Here we can provide argument `a` or `b` to generate different password.

Example :
- python [Main.py](https://github.com/chessrajat/Python_MiniProjects/blob/master/PasswordGenerator/Main.py) a 10
- python [Main.py](https://github.com/chessrajat/Python_MiniProjects/blob/master/PasswordGenerator/Main.py) b

Thank You.
If you have any issues or question post them on github issues section of this repository.

[Github PasswordGenerator](https://github.com/chessrajat/Python_MiniProjects/tree/master/PasswordGenerator)