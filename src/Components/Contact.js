import React, { useState } from "react";
import Swal from "sweetalert2";
import { formKeys } from "./config/formKeys";

const Contact = () => {
    const [email, setEmail] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Envia os dados para o Google Forms
            await fetch(
                `https://docs.google.com/forms/d/${formKeys.googleFormId}/formResponse`,
                {
                    method: "POST",
                    mode: "no-cors",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                    },
                    body: new URLSearchParams({
                        [formKeys.entryId]: email,
                    }),
                }
            );

            // Limpa o campo e exibe o pop-up
            setEmail("");
            Swal.fire({
                icon: "success",
                title: "E-mail enviado!",
                text: "Um atendente entrará em contato em breve.",
                confirmButtonColor: "#25d366",
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Erro",
                text: "Ocorreu um erro ao enviar seu e-mail. Tente novamente!",
            });
        }
    };
    return (
        <section id="contact">
            <div className="contact-page-wrapper">
                <h1 className="primary-heading">Have a Question In Mind ?</h1>
                <h1 className="primary-heading">Let Us Help You</h1>
                <div className="contact-form-container">
                    <form
                        onSubmit={handleSubmit}
                        action="https://docs.google.com/forms/d/1kh8LukU0EjTQaKdsxZ3duhFumM21sfocpde2RdpBNMo/formResponse"
                        method="POST"
                        class="contact-form-container">
                        <input
                            type="email"
                            name="entry.1322255128"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="yourmail@gmail.com"
                            required
                        />
                        <button className="secondary-button">Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
