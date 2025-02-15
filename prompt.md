i am starting a new university project.
It is a game to help students learning how to calculate different order determinants: second order, third order and fourth order.
I don't have any server so i am gonna have to use free ones either netlify or vercel. If you can suggest better options, please let me know.

I am not planning to use any database. I guess browser local storage would be sufficient.
Based on deployment restrictions, i am gonna have to stick to one programming language and framework: React JS for javascript.
If you can suggest better options, please let me know.

I am gonna code this project using neovim. I create react project with vite.
I recently decided to learn tailwind css, i think this project would be good for me to learn using tailwind in jsx.

I have thought game process well so far but the main problem is i don't have its design for front-end and i don't have designer friend to do it for me.
Can you help if i tell everything thoroughly about the project mechanics?

I should develop this project compatible for laptop and mobile device screen size.
When user is enter the site, in center there should be the following welcome message:
`
Determinantlarni hisoblashni o'rganamiz
INTERFAOL O'YINGA XUSH KELIBSIZ!!!
`
The game consists of three levels. Under the welcome message there should be level (default is 1):
`
1 - bosqich
`
Under the level indicator, there should be the game condition. It depends on game level, level changes the determinant order.
So we can add new state variable for determinant order.
If the level is 1, it is: `Ikkinchi tartibli determinantni hisoblang:`
If the level is 2, it is: `Uchinchi tartibli determinantni hisoblang:`
If the level is 3, it is: `To'rtinchi tartibli determinantni hisoblang:`

User has 3 chances to provide correct answer. Under game condition there should be 3 things for desktop screen:
 1. number of tries:
    if it is the first try: `1 - urinish`    
    if it is the second try: `2 - urinish`    
    if it is the third try: `3 - urinish`    
 2. render determinant (= ?) that should be solved by user. I am thinking about generating numbers in range from -99 to 99 with random.
    if it is the first level, it is second-order determinant so 4 numbers are generated.
    if it is the second level, it is third-order determinant so 9 numbers are generated.
    if it is the third level, it is fourth-order determinant so 16 numbers are generated.
 3. answer part: `Javob: `, input for user to provide his/her answer and if the answer is correct `✅` else `❌`

Under it, there should be section for clarifying answer:
 - if the provided anser is wrong:
        `Javobingiz noto'g'ri:`
        step-by-step calculating the determinant to the right answer.
        and `To'g'ri Javob: ` correct answer & if try count is less than 4 button for retry `Qayta urinish`
there count of tries increases for one. If user provides wrong answer 3 times there should be the following message:
`Sizga ushbu mavzuni qayta o'rganishni tavsiya qilaman!`
`Ushbu bosqichdan qayta urinish: ` and countdown timer for an hour `dan so'ng amalga oshirishingiz mumkin.`
When the countdown is done, try count is set to zero (not the level)

 - if the provided anser is right:
there should be `Javobingiz to'g'ri: ` and step-by-step guide for right answer.
`Tabriklayman, keyingi bosqichga o'tdingiz.`
Button for continuation `Davom etish`
When the button is pressed, try count is set to zero and level is increased by 1.








try count, level and user info should be persisted across refreshes or new visiting to site.
The first thing we have to do for now is form UI for it and we can develop other things later.
