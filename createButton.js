<html>
    <head>
        <meta charset="utf-8">
        <title>Button</title>
        <style>
            .button {
            width: 96px;
            height: 48px;
            font-size: 24px;
        }
        </style>
    </head>
    <body>
        <script>
            var clickBtn = document.createElement('button');
            let counter = 0;
            clickBtn.innerHTML = counter;
            clickBtn.id = 'btn';
            clickBtn.className = 'button';
            document.body.appendChild(clickBtn);

            clickBtn.onclick = function () {
                counter++;
                btn.innerHTML = counter.toString();
            };
        </script>
    </body>
</html>
