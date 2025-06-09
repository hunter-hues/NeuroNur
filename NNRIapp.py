import streamlit as st

# --- Styling ---
st.markdown("""
    <style>
        .stApp {
            background-color: white;
            color: black;
        }
        h1, h2, h3, h4, h5, h6, p, div {
            color: black !important;
        }
        .css-1d391kg, .css-ffhzg2, .css-1v3fvcr {
            color: black !important;
        }
    </style>
""", unsafe_allow_html=True)

# --- Logo ---
st.image("logo.jpeg", width=150)

# --- Header ---
st.title("NeuroNur Research Initiative NNRI")
st.subheader("Advancing neuroscience through global collaboration and open data 🌍")

# --- Why We Started NeuroNur ---
st.markdown("""
    <div style='background-color:#f9f9f9; padding:20px; border-radius:12px; margin-bottom:20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);'>
        <h3>🌱 Why We Started NeuroNur</h3>
        <p>
        NeuroNur was born out of a deep passion for neuroscience and a belief in the power of collaboration. 
        Many aspiring researchers—especially in regions with limited resources—face barriers to participating 
        in impactful research. We wanted to change that.
        </p>
        <p>
        Our goal is to create an inclusive and supportive platform where individuals from all backgrounds 
        can contribute meaningfully to neuroscience. Whether you're a student, early-career scientist, or 
        seasoned researcher, NeuroNur is a space to learn, grow, and make a difference—together.
        </p>
    </div>
""", unsafe_allow_html=True)

# --- How Volunteering Works ---
st.markdown("""
    <div style='background-color:#f9f9f9; padding:20px; border-radius:12px; margin-bottom:20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);'>
        <h3>🙌 How Volunteering Works</h3>
        <p>
        Volunteering with NeuroNur is flexible and meaningful. You can contribute based on your availability 
        and skills. Opportunities include:
        </p>
        <ul>
            <li>💻 Assisting with data analysis or visualization</li>
            <li>✍️ Helping write or review research proposals and papers</li>
            <li>🎙️ Supporting outreach, events, and science communication</li>
            <li>🔬 Joining project teams to co-design experiments</li>
        </ul>
        <p>
        Whether you’re technical, creative, or just curious—we welcome your energy and ideas!
        </p>
    </div>
""", unsafe_allow_html=True)

# --- What Our Projects Look Like ---
st.markdown("""
    <div style='background-color:#f9f9f9; padding:20px; border-radius:12px; margin-bottom:20px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);'>
        <h3>🔬 What Our Projects Look Like</h3>
        <p>
        Our projects follow a collaborative model designed to include a range of contributors:
        </p>
        <ol>
            <li><strong>Ideation</strong>: A research question is proposed by anyone in the community.</li>
            <li><strong>Co-Design</strong>: Volunteers help develop a review and experiment design around the idea.</li>
            <li><strong>Partnerships</strong>: We collaborate with labs (starting in Saudi Arabia) to conduct the experiments.</li>
            <li><strong>Data Sharing</strong>: Once collected, data is shared openly for further analysis.</li>
            <li><strong>Publication</strong>: Teams co-author papers and publish findings together.</li>
        </ol>
        <p>
        Our goal is to make science accessible, transparent, and truly collaborative.
        </p>
    </div>
""", unsafe_allow_html=True)


# --- Mission ---
st.markdown("### 🌿 **Mission**")
st.write("""
NeuroNur is a global, volunteer-based initiative committed to advancing neuroscience research by fostering collaboration, communication, and knowledge-sharing across borders. Our platform empowers scientists, researchers, students, and professionals from all backgrounds to connect, co-design studies, and contribute meaningfully to the field. We believe that impactful neuroscience emerges from the integration of diverse perspectives, methodologies, and areas of expertise. By creating an inclusive and supportive environment, we aim to lower barriers to participation in research, promote open data practices, and cultivate a strong sense of purpose and community among those who are passionate about neuroscience.
""")

# --- Vision ---
st.markdown("### 🌌 **Vision**")
st.write("""
Our vision is to build a dynamic and globally connected neuroscience community that redefines how research is conducted and shared. We envision a future where passionate individuals, regardless of geography or institutional affiliation, can collaborate to drive meaningful scientific discoveries. NeuroNur seeks to become a leading platform for inclusive, high-impact neuroscience research—united by the values of openness, equity, and scientific curiosity. By bridging gaps between disciplines, institutions, and cultures, we aim to accelerate innovation, empower early-career scientists, and contribute to a more collaborative and equitable future for neuroscience.
""")

# --- Join Us ---
st.markdown("### ✨ Join Us")
st.write("""
We're building a team of researchers, students, and volunteers! If you're interested in collaborating 
on neuroscience, data analysis, or outreach, [click here to apply](https://forms.gle/your-google-form-link).
""")

# --- Projects ---
st.markdown("### 🔬 Our First Project")
st.info("Launching June 2025 – Topic: Neural biomarkers for early Alzheimer's detection (details coming soon!)")

# --- Footer ---
st.markdown("---")
st.caption("© 2025 NeuroNur | Built with 💚 by volunteers worldwide")
