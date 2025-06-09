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
st.subheader("Advancing neuroscience research through global collaboration 🌍")

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
