import React from "react";

const testimonials = [
  {
    text: "Encontrei a Ana para cuidar do Thor nas minhas férias e foi incrível! Recebia fotos todos os dias e ele foi tratado com todo carinho. Super recomendo o PetStar!",
    client: "Laura Mendes",
    pet: "Dona do Thor",
    img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80",
  },
  {
    text: "O Carlos cuidou da minha Luna idosa com toda a paciência e conhecimento que ela precisava. Fiquei tranquila sabendo que estava em boas mãos. Obrigada PetStar!",
    client: "Ricardo Almeida",
    pet: "Dono da Luna",
    img: "https://images.unsplash.com/photo-1552058544-f2b08422138a?ixlib=rb-4.0.3&auto=format&fit=crop&w=699&q=80",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="section-padding">
      <div className="container">
        <h2 className="section-title">O que dizem sobre nós</h2>
        <div className="row">
          {testimonials.map((t, idx) => (
            <div className="col-md-6 mb-4" key={idx}>
              <div className="testimonial-card">
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-client">
                  <img src={t.img} alt={t.client} />
                  <div>
                    <div className="client-name">{t.client}</div>
                    <div className="client-pet">{t.pet}</div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
