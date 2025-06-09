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
st.image("NNlogo.jpg", width=150)

# --- Header ---
st.title("NeuroNur Research Initiative NNRI")
st.markdown("###_Advancing neuroscience through global collaboration and open data 🌍_", unsafe_allow_html=True)

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
on neuroscience, data analysis, or outreach, [click here to apply](https://forms.gle/2b6vWDU2vdgSbuGw7).
""")

# --- Projects ---
st.markdown("### 🔬 Our First Project")
st.info("Launching July 2025 – Topic: TBD (details coming soon!)")

# --- Section: Clickable Tabs for Info ---
st.markdown("### 💡 Learn More About NeuroNur")

tab1, tab2, tab3 = st.tabs(["🌱 Why We Started", "🙌 Volunteering", "🔬 Our Projects"])

with tab1:
    st.markdown("### 🌱 Why We Started NeuroNur")
    st.write("""
    NeuroNur was born out of a deep passion for neuroscience and a belief in the power of collaboration. 
    Many aspiring researchers—especially in regions with limited resources—face barriers to participating 
    in impactful research. We wanted to change that.

    Our goal is to create an inclusive and supportive platform where individuals from all backgrounds 
    can contribute meaningfully to neuroscience. Whether you're a student, early-career scientist, or 
    seasoned researcher, NeuroNur is a space to learn, grow, and make a difference—together.
    """)

with tab2:
    st.markdown("### 🙌 How Volunteering Works")
    st.write("""
    Volunteering with NeuroNur is flexible and meaningful. You can contribute based on your availability 
    and skills. Opportunities include:
    
    - 💻 Assisting with data analysis or visualization  
    - ✍️ Helping write or review research proposals and papers  
    - 🎙️ Supporting outreach, events, and science communication  
    - 🔬 Joining project teams to co-design experiments  

    Whether you’re technical, creative, or just curious—we welcome your energy and ideas!
    """)

with tab3:
    st.markdown("### 🔬 What Our Projects Look Like")
    st.write("""
    Our projects follow a collaborative model designed to include a range of contributors:

    1. **Ideation**: A research question is proposed by anyone in the community.  
    2. **Co-Design**: Volunteers help develop a review and experiment design around the idea.  
    3. **Partnerships**: We collaborate with labs to conduct the experiments.  
    4. **Data Sharing**: Once collected, data is shared openly for further analysis.  
    5. **Publication**: Teams co-author papers and publish findings together.

    Our goal is to make science accessible, transparent, and truly collaborative.
    """)

# --- Footer ---
st.markdown("---")
st.caption("© 2025 NeuroNur | Built with 💚 by volunteers worldwide")
