'use client';

import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Button from '@mui/material/Button/Button';
import Typography from '@mui/material/Typography';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../styles/theme';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}
    {...props}
  />
))(({ theme }) => ({
  backgroundColor:
    theme.palette.mode === 'dark'
      ? 'rgba(255, 255, 255, .05)'
      : 'rgba(0, 0, 0, .03)',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  '& .MuiAccordionSummary-content': {
    marginLeft: theme.spacing(1),
  },
}));

const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
  padding: theme.spacing(2),
  borderTop: '1px solid rgba(0, 0, 0, .125)',
}));

export default function QAaccordions() {
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <div>
      <ThemeProvider theme={theme}>
        <Accordion
          expanded={expanded === 'panel1'}
          onChange={handleChange('panel1')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1bh-content"
            id="panel1bh-header"
          >
            <Typography
              sx={{ width: '100%', flexShrink: 0, fontSize: { xs: 14 } }}
            >
              どのような依頼できるのですか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: { xs: 14 } }}>
              お庭・外構工事、デザイン、植栽、庭木の剪定・伐採・抜根、草刈りなどです。
            </Typography>
            <Button
              sx={{ my: 2, fontSize: { xs: 12 } }}
              color="inherit"
              variant="outlined"
              href="/services"
              endIcon={<NavigateNextIcon />}
              aria-label="servicesへ移動"
            >
              詳細ページへ
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel2'}
          onChange={handleChange('panel2')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2bh-content"
            id="panel2bh-header"
          >
            <Typography
              sx={{ width: '100%', flexShrink: 0, fontSize: { xs: 14 } }}
            >
              見積だけでもできますか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: { xs: 14 } }}>
              もちろんです。無料でお見積りさせていただきます。どんなことでもご気軽にご相談下さい。
            </Typography>
            <Button
              sx={{ my: 2, fontSize: { xs: 12 } }}
              href="/contact"
              color="inherit"
              variant="outlined"
              endIcon={<NavigateNextIcon />}
              aria-label="contactへ移動"
            >
              お問い合わせをする
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel3'}
          onChange={handleChange('panel3')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel3bh-content"
            id="panel3bh-header"
          >
            <Typography
              sx={{ width: '100%', flexShrink: 0, fontSize: { xs: 14 } }}
            >
              対応しているエリアはどこですか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: { xs: 14 } }}>
              春日井市を中心に活動しています。隣接している市でも対応可能です。
            </Typography>
            <Button
              sx={{ my: 2, fontSize: { xs: 12 } }}
              href="/map"
              color="inherit"
              variant="outlined"
              endIcon={<NavigateNextIcon />}
              aria-label="mapへ移動"
            >
              詳細ページへ
            </Button>
          </AccordionDetails>
        </Accordion>
        <Accordion
          expanded={expanded === 'panel4'}
          onChange={handleChange('panel4')}
        >
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel4bh-content"
            id="panel4bh-header"
          >
            <Typography
              sx={{ width: '100%', flexShrink: 0, fontSize: { xs: 14 } }}
            >
              どれくらいの期間で施工できますか？
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography sx={{ fontSize: { xs: 14 } }}>
              施工内容、環境より異なります。お客様のお庭を拝見させていただきお伝えいたします。ご気軽にお問い合わせください。
            </Typography>
            <Button
              sx={{ my: 2, fontSize: { xs: 12 } }}
              href="/contact"
              color="inherit"
              variant="outlined"
              endIcon={<NavigateNextIcon />}
              aria-label="contactへ移動"
            >
              お問い合わせをする
            </Button>
          </AccordionDetails>
        </Accordion>
      </ThemeProvider>
    </div>
  );
}
