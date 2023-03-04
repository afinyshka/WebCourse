import cgi

print('Content-Type: text/html; charset=utf-8')
print()

form = cgi.FieldStorage()  # form — приблизительный аналог $_POST

# Проверка, есть ли data в форме вообще. Если нет, то предполагаем,
# что это GET-запрос, и отдаём HTML-код формы
if 'data' not in form:
    print('''
        <form action="" method="POST" enctype="multipart/form-data">
            Введите какой-нибудь текст:<br/>
            <input name="data" /><br/>
            <input type="submit" value="Отправить" />
        </form>
    ''')

# Проверка на непустое значение. getlist возвращает список всех
# data из формы; в нашей форме только один data и мы берём первый
# и единственный элемент из списка
elif form.getlist('data')[0]:
    print('Вы ввели: <strong>{escaped_data}</strong>'.format(
        # не забываем про уязвимости XSS; используем cgi.escape,
        # чтобы экранировать HTML-спецсимволы и защититься
        escaped_data=cgi.escape(form.getlist('data')[0], quote=True)
    ))

else:
    print('Вы ничего не ввели')