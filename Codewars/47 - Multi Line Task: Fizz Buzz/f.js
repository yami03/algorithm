// https://www.codewars.com/kata/593550e26d07549c5100004a
// You need to complete the FizzBuzz function:

// if n is divisible by 15, return 'fizzbuzz'
// if n is divisible by 5, return 'buzz'
// if n is divisible by 3, return 'fizz'
// otherwise, return n as a number
// where n is a positive integer.

// Requirement: Every line must have at most 3 characters,
// and total number of lines must be less than 25.

f=
n=>
(!(
n%
15)
?`\
fi\
zz\
bu\
zz`
:!(
n%5
)?
`b\
uz\
z`:
!(
n%3
)?
`f\
iz\
z`
:n)
