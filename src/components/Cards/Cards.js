import React, { useState } from "react";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

import {
  FaClipboardList,
  FaTasks,
  FaPen,
  FaRegEdit,
  FaLightbulb,
  FaBriefcase,
  FaHistory,
  FaEnvelope,
  FaFacebook,
  FaLinkedin,
  FaArrowRight,
} from "react-icons/fa";
import { MdContentPasteSearch, MdOutlineDescription } from "react-icons/md";
import { RiSlashCommands2 } from "react-icons/ri";
import { LiaBiohazardSolid } from "react-icons/lia";
import "./Cards.css"; // Import the CSS file

const Cards = () => {
  const navigate = useNavigate();
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (route) => {
    navigate(route);
    window.scrollTo({ top: 0, behavior: "auto" });
  };

  const handleMouseEnter = (cardId) => {
    setHoveredCard(cardId);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const isHovered = (cardId) => cardId === hoveredCard;

  const cards = [
    {
      id: "AmazonProduct",
      title: "Amazon Product Description",
      description:
        "Create compelling product descriptions for Amazon listings.",
      icon: FaClipboardList, // Represents lists or organized content
    },
    {
      id: "AmazonPfeature",
      title: "Amazon Product Features ",
      description:
        'Create key feature and benefit bullet points for Amazon listings under the "about this item" section.',
      icon: FaTasks, // Represents tasks or feature lists
    },
    {
      id: "BlogPost",
      title: "Blog Post Conclusion",
      description:
        "Wrap up your blog posts with an engaging conclusion paragraph.",
      icon: FaPen, // Represents writing or editing
    },
    {
      id: "BlogPostIntro",
      title: "Blog Post Intro Paragraph",
      description: "Write an engaging opening paragraph for your blog post.",
      icon: FaRegEdit, // Represents editing or writing
    },
    {
      id: "BlogPostOutline",
      title: "Blog Post Outline",
      description:
        'Create lists and outlines for articles, for example for "How to" style blog posts and articles.',
      icon: FaClipboardList, // Represents lists or outlines
    },
    {
      id: "BlogPostTopicIdeas",
      title: "Blog Post Topic Ideas",
      description:
        "Generate new blog post topics that will engage readers and rank well on Google.",
      icon: FaLightbulb, // Represents ideas or inspiration
    },
    {
      id: "BusinessOrProductName",
      title: "Business or Product Name",
      description: "Generate a winning name for your business or product.",
      icon: FaBriefcase, // Represents business or professional tasks
    },
    {
      id: "Commands",
      title: "Commands",
      description: "Tell charli exactly what to write with a command.",
      icon: RiSlashCommands2, // Represents commands or instructions
    },
    {
      id: "CreativeStory",
      title: "Creative Story",
      description: "Write creative stories to engage readers.",
      icon: FaHistory, // Represents storytelling or history
    },
    {
      id: "EmailSubjectLines",
      title: "Email Subject Lines",
      description: "Get your emails opened with irresistible subject lines.",
      icon: FaEnvelope, // Represents email or communication
    },
    {
      id: "CompanyBio",
      title: "Company Bio",
      description: "Share your company's story with a compelling bio.",
      icon: LiaBiohazardSolid, // Represents unique or attention-grabbing content
    },
    {
      id: "ContentImprover",
      title: "Content Improver",
      description:
        "Enhance a piece of content by rewriting it to be more engaging, creative, and captivating.",
      icon: MdContentPasteSearch, // Represents content improvement or editing
    },
    {
      id: "FacebookAds",
      title: "Facebook Ad Primary Text",
      description:
        "Craft compelling primary text for Facebook ads that attract users.",
      icon: FaFacebook, // Represents Facebook or social media
    },
    {
      id: "JobDescription",
      title: "Job Description",
      description:
        "Create a clear and concise job description to attract suitable candidates.",
      icon: MdOutlineDescription, // Represents descriptions or job details
    },
    {
      id: "LinkedInTopicIdeas",
      title: "LinkedIn Topic Ideas",
      description:
        "Get inspired with LinkedIn topic ideas to share with your network.",
      icon: FaLinkedin, // Represents LinkedIn or professional networking
    },
  ];
  return (
    <div className="container-for-cards">
      {cards.map((card) => {
        const IconComponent = card.icon; // Get the icon component from the card
        return (
          <div
            key={card.id}
            className="all-card"
            onClick={() => handleCardClick(`/${card.id}`)}
            onMouseEnter={() => handleMouseEnter(card.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div></div>
            {/* Icon at the top left corner */}

            <CardContent className="card-content">
              <IconComponent
                className="icon logo"
                style={{ margin: "10px", textShadow: "10px 10px #000" }}
              />
              {/* Card title with arrow icon */}
              <Typography
                style={{ marginTop: "25px" }}
                variant="h5"
                component="div"
                className={`title ${isHovered(card.id) ? "hovered" : ""}`}
              >
                {card.title}
                {/* Arrow Icon */}
                <FaArrowRight
                  className={`arrow-icon ${isHovered(card.id) ? "rotate" : ""}`}
                />
              </Typography>

              {/* Divider */}
              <div
                className={`title ${
                  isHovered(card.id) ? "dividerhover" : "divider"
                }`}
              ></div>

              {/* Card description */}
              <Typography
                variant="body2"
                className={`description ${
                  isHovered(card.id) ? "descriptionhover" : ""
                }`}
              >
                {card.description}
              </Typography>
            </CardContent>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;
