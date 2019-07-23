export function factorial(n:number = 0): number
{
    if (n < 0) {
        throw new Error('Número negativo')
    } else if (parseInt(String(n)) !== parseFloat(String(n))) {
        throw new Error('Número decimal')
    }

    if (n == 0 || n == 1)
        return 1
    else
        return n * factorial(n-1)
}