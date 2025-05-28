
import streamlit as st

# --- Page Config ---
st.set_page_config(page_title="NeuroNoor", page_icon="🧠", layout="centered")

# --- Logo ---
st.image("logo.png", width=150)  # Make sure to upload your logo as 'logo.png' to your GitHub repo

# --- Header ---
st.title("NeuroNoor")
st.subheader("Advancing neuroscience in Saudi Arabia through global collaboration 🌍")

# --- Mission ---
st.markdown("### 🌿 Mission")
st.write(
    "NeuroNoor is a volunteer-based research initiative dedicated to advancing neuroscience "
    "in Saudi Arabia by fostering global collaboration. We provide a platform for Saudi researchers "
    "to connect with scientists worldwide, co-design neuroscience studies, and contribute to meaningful discoveries."
)

# --- Vision ---
st.markdown("### 🌌 Vision")
st.write(
    "To build a globally connected neuroscience community where Saudi researchers lead and contribute "
    "to cutting-edge discoveries, foster open science, and inspire the next generation."
)

# --- Join Us ---
st.markdown("### ✨ Join Us")
st.write(
    "We're building a team of researchers, students, and volunteers! If you're interested in collaborating "
    "on neuroscience, data analysis, or outreach, [click here to apply](https://forms.gle/your-google-form-link)."
)

# --- Projects ---
st.markdown("### 🔬 Our First Project")
st.info(
    "Launching June 2025 – Topic: Neural biomarkers for early Alzheimer's detection (details coming soon!)"
)

# --- Footer ---
st.markdown("---")
st.caption("© 2025 NeuroNoor | Built with 💚 by volunteers worldwide")
