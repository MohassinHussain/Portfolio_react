import React, {useState} from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
function Blogs({darkMode}) {
    const markdownContent = `# **Getting Started with GSoC Proposal**

  ## Important Dates
  1. **Jan 27 - Feb 11**: Organizations application period.
  2. **Mar 24 - Apr 8**: Contributor application period.
  3. **Proposal Submission**: Ensure your proposal is submitted during the application period.
  4. **Coding Duration**: Projects typically last **12 weeks or longer**.
  
  ---
  
  ## **How to Get Started with a GSoC Proposal**
  - **Choose a project idea that interests you**: Select a project that aligns with your skills and passion.
  - **Consider the project's bigger picture**: Understand how the project fits into the organization's goals.
  - **Enhance the project's scope**: Think of ways to extend or improve the project.
  - **Write a community-focused proposal**: Highlight the benefits of the project to the organization and the open-source community.
  
  ---
  
  ## **What to Include in a GSoC Proposal**
  
  1. **Title**: A concise and descriptive title for your project.
  2. **Summary**: A brief overview that intrigues the reviewer and encourages them to read more.
  3. **Benefits to the Community**: Explain how your project will make a positive impact on the community.
  4. **Personal Details**: Include relevant personal information such as your school, major, and background.
  5. **Availability**: Clearly state how many hours per week you can commit to the project.
  
  ---
  
  ## **Crafting Your Proposal**
  
  - **Highlight your skills and experience**:
    - Showcase relevant coding skills.
    - Mention contributions to open-source projects.
    - Demonstrate your understanding of the project.
    
  - **Define a clear plan**:
    - Create a detailed timeline.
    - Include milestones and deliverables for each phase of the project.
    
  - **Address potential challenges**:
    - Identify possible obstacles.
    - Propose solutions to overcome these challenges.
  
  - **Proofread carefully**:
    - Ensure your proposal is free from grammatical errors.
    - Adhere to the organization's application guidelines.
  
  ---
  
  ## **During the Application Process**
  
  - **Submit on time**: Ensure you meet all deadlines for submitting your proposal.
  - **Be responsive to feedback**:
    - Engage with mentors.
    - Address questions and provide additional details as required.
  
  By following these guidelines, you'll create a strong proposal that demonstrates your capabilities and commitment to the GSoC program.
  
  
  `;
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="p-4 flex flex-col items-center">
      <h1>Informationsℹ️</h1>
      <button
        className="underline text-blue-500 p-3"
        onClick={() => setShowPopup(true)}
      >
        GSoC 2025 Main Considerations
      </button>

      {showPopup && (
        <div
          className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setShowPopup(false)}
        >
          <div
            className={`p-6 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-auto  ${
              darkMode ? "bg-blue-950 text-gray-300" : "bg-white text-black"
            }`}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              className="text-gray-500 hover:text-gray-800 float-right"
              onClick={() => {
                setShowPopup(false);
                window.addEventListener("keydown", (event) => {
                  if (
                    event.key == "ArrowLeft" ||
                    event.key == "ArrowRight" ||
                    event.key == "ArrowUp" ||
                    event.key == "ArrowDown"
                  ) {
                    setShowPopup(false);
                  }
                });
              }}
            >
              ✖
            </button>
            <ReactMarkdown
              children={markdownContent}
              remarkPlugins={[remarkGfm]}
              className="prose prose-sm md:prose-lg lg:prose-xl"
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Blogs;
