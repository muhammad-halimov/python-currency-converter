from eel import init, start, expose
import requests

init('App')


@expose
def currency(from_currency, to_currency, amount):
    from_currency = str(from_currency).upper(); to_currency = str(to_currency).upper(); amount = float(amount)
    response = requests.get(f"https://api.frankfurter.app/latest?amount={amount}&from={from_currency}&to={to_currency}")
    return f"{amount} {from_currency} is {response.json()['rates'][to_currency]} {to_currency}"


start('index.htm', size=(480, 720))

