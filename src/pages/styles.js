import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  padding: 32px 20px 48px;

  .appShell {
    width: min(100%, 960px);
    display: flex;
    flex-direction: column;
    gap: 28px;
  }

  .hero {
    position: relative;
    overflow: hidden;
    padding: 32px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 32px;
    background:
      radial-gradient(circle at top left, rgba(88, 166, 255, 0.22), transparent 34%),
      linear-gradient(145deg, rgba(13, 17, 23, 0.92), rgba(33, 38, 45, 0.95));
    box-shadow: 0 28px 60px rgba(0, 0, 0, 0.32);
  }

  .githubLogo {
    width: 88px;
    height: 88px;
    object-fit: contain;
    margin-bottom: 18px;
    filter: drop-shadow(0 14px 26px rgba(0, 0, 0, 0.28));
  }

  .eyebrow {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 14px;
    padding: 8px 12px;
    border: 1px solid rgba(88, 166, 255, 0.28);
    border-radius: 999px;
    background: rgba(88, 166, 255, 0.1);
    color: #8ec5ff;
    font-size: 0.78rem;
    font-weight: 700;
    letter-spacing: 0.08em;
    text-transform: uppercase;
  }

  h1 {
    max-width: 13ch;
    margin-bottom: 14px;
    color: #f0f6fc;
    font-size: clamp(2rem, 5vw, 3.9rem);
    line-height: 0.98;
    letter-spacing: -0.05em;
  }

  .hero p {
    max-width: 62ch;
    color: rgba(230, 237, 243, 0.78);
    font-size: 1.02rem;
    line-height: 1.7;
  }

  .searchPanel,
  .resultsSection {
    padding: 24px;
    border: 1px solid rgba(255, 255, 255, 0.08);
    border-radius: 28px;
    background: rgba(13, 17, 23, 0.72);
    backdrop-filter: blur(14px);
    box-shadow: 0 18px 40px rgba(0, 0, 0, 0.22);
  }

  .searchPanel {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .searchIntro {
    display: flex;
    flex-direction: column;
    gap: 6px;
  }

  .searchIntro strong {
    color: #f0f6fc;
    font-size: 1.05rem;
    font-weight: 700;
  }

  .searchIntro span {
    color: rgba(230, 237, 243, 0.7);
    font-size: 0.96rem;
    line-height: 1.5;
  }

  .searchRow {
    display: grid;
    grid-template-columns: minmax(0, 1fr) 180px;
    gap: 14px;
    align-items: stretch;
  }

  form {
    width: 100%;
  }

  .feedback {
    min-height: 24px;
    color: rgba(230, 237, 243, 0.76);
    font-size: 0.94rem;
    line-height: 1.5;
  }

  .feedback.error {
    color: #ffb3ad;
  }

  .resultsHeader {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 16px;
    margin-bottom: 8px;
  }

  .resultsHeader strong {
    color: #f0f6fc;
    font-size: 1.05rem;
  }

  .resultsHeader span {
    color: rgba(230, 237, 243, 0.65);
    font-size: 0.92rem;
  }

  .emptyState {
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding: 28px 24px;
    border: 1px dashed rgba(88, 166, 255, 0.24);
    border-radius: 22px;
    background: rgba(88, 166, 255, 0.04);
  }

  .emptyState strong {
    color: #f0f6fc;
    font-size: 1rem;
  }

  .emptyState span {
    color: rgba(230, 237, 243, 0.7);
    line-height: 1.5;
  }

  @media (max-width: 768px) {
    padding: 20px 16px 32px;

    .hero,
    .searchPanel,
    .resultsSection {
      padding: 20px;
      border-radius: 24px;
    }

    .githubLogo {
      width: 76px;
      height: 76px;
    }

    .searchRow {
      grid-template-columns: 1fr;
    }
  }
`;
