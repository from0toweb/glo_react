const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const htmltotext = require('nodemailer-html-to-text').htmlToText;
const { email, password } = require('./config');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: email,
        pass: password,
    },
});

transporter.use('compile', htmltotext());

const sendOrderEmail = data => {
    const emailText = `
        <div>
            <h2 style="color: #000;">Добрый день ${data.clientName.split(' ')[0]}</h2>
            <h3 style="color: #000;">Ваш заказ :</h3>
            <ul >
                ${data.order
                    .map(
                        ({ name, count, price, topping, choice }) =>
                            `
                                <li style="font-size: 16px; font-weight: 600; color: #000;">${name} - ${count} шт. ${
                                price * count
                            } руб.</li>
                                ${
                                    choice !== 'no choice'
                                        ? `
                                <ul >
                                    <li style="font-size: 14px; color: #000;">${choice}</li>
                                </ul>`
                                        : ''
                                }
                                ${
                                    topping && topping !== 'no toppings'
                                        ? `
                                            <ul >
                                                <span style="font-size: 15px; font-weight: 500; color: #000;">Допы:</span>
                                                ${topping
                                                    .map(
                                                        item =>
                                                            `<li style="font-size: 14px;color: #000;">${item}</li>`
                                                    )
                                                    .join('')}
                                            </ul>
                                        `
                                        : ''
                                }
                            `
                    )
                    .join('')}
            </ul>
            <p style="font-size: 18px; font-weight: 600; color: #000;">Итого: <span style="font-size: 20px; font-weight: 600; color: #000;">${data.order.reduce(
                (sum, item) => sum + item.price * item.count,
                0
            )}</span> руб.</p>
        </div>
    `;

    const options = {
        from: `MrDonald's <${email}>`,
        to: `${data.clientEmail}`,
        subject: `Ваш заказ из MrDonald's`,
        html: emailText,
    };

    transporter.sendMail(options);
};

exports.sendUserEmail = functions.database
    .ref('orders/{pushId}')
    .onCreate(order => sendOrderEmail(order.val()));
