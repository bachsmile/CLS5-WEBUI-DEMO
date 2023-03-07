<script setup lang="ts">
function Greet(greeting: string, ...names: string[]) {
  return `${greeting} ${names.join(', ')}!`
}

const nameFunc = (par: any, par2: () => string) => { // test callback function
}

const fnCallback = (fpar: boolean) => {
  return function sss() {
    return `Callback fn: ${fpar}`
  }
}

nameFunc('bach', fnCallback(false))

// test closure
function counter() {
  let count = 0

  return function () {
    count++
  }
}

const myCounter = counter()

myCounter() // 1
myCounter() // 2
myCounter() // 3

function adder(n: number) {
  const intro = 'This answer is '
  const local = n

  return function (number: number) {
    const result = number + local
  }
}

const adder2 = adder(2)

adder2(10)

// This answer is 12
</script>
