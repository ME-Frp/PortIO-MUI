import { Link as MuiLink, Typography } from '@mui/material';

export default function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {'Copyright © '}
      ME Frp 项目组
      {' '}
      2021-{new Date().getFullYear()}.
    <br />
    <MuiLink color="inherit" href="https://内网穿透.中国/">
    Frp 内网穿透联盟统一识别编码：AZWB66WB
      </MuiLink>
      <br />
              <MuiLink color="inherit" href="https://beian.miit.gov.cn">蜀ICP备2023020251号-2</MuiLink>
              <br />
              <MuiLink color="inherit" href="https://beian.miit.gov.cn">增值电信业务许可证号: B1-20242579 </MuiLink>
    </Typography>
  );
}
