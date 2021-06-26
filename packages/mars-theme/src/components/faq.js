import React, { useEffect, useState } from "react";
import axios from "axios";
import { styled, connect, Global, decode } from "frontity";
import Footer from "./footer";
import FAQ from "react-faq-component";

const Faq = ({ state, actions }) => {

  const [faqs, setFaqs] = useState({});

  useEffect(() => {

	async function fetchManage() {
		const results = await axios.get(`https://manage.pritchardelectric.net/wp-json/wp/v2/posts/64?timestamp=${new Date().getTime()}`, {'Cache-Control': 'no-cache', 'Pragma': 'no-cache', 'Expires': '0'});
		let data = results.data.content.rendered.replace(/\n/g, '');
		data = data.replace(/<h2>/g, '');
		data = data.replace(/<\/h2>/g, '');
		data = data.replace(/<\/p>/g, '|');
		data = data.replace(/<p>/g, '|');

		let questAns = data.split("|")
		
		let row = []
		questAns.forEach((item, index) => {
			if(index !== questAns.length - 1 ){
				if(index%2 === 0){
					row.push({title: item, content: `<p>${questAns[index + 1]}</p>`})
				}
			}
		})
		setFaqs({title: "FAQs", rows: row});
	}

	fetchManage()

  }, [])

  const data = {
    title: "FAQs",
    rows: faqs
  };

  const styles = {
    // bgColor: 'white',
    titleTextColor: "#1f40a3",
    rowTitleColor: "#1f40a3",
    // rowContentColor: 'grey',
    // arrowColor: "red",
  };

  const config = {
    animate: true,
    // arrowIcon: "V",
    // tabFocus: true
  };

  return (
    <main
      style={{
        width: "100%",
        boxShadow: "inset 0 8px 8px -6px rgba(0, 0, 0, 0.5)",
      }}
    >
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          padding: "50px",
          marginTop: "50px",
        }}
      >
        <div style={{ width: "980px" }}>
          <FAQ data={faqs} styles={styles} config={config} />
        </div>
      </section>
      <div style={{ marginTop: "100px" }}>
        <Footer />
      </div>
    </main>
  );
};

// Connect the Item to gain access to `state` as a prop
export default connect(Faq);
