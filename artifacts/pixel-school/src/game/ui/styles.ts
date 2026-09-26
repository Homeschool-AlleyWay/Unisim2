export const CSS = `
.msg-root{position:absolute;inset:0;pointer-events:none;font-family:'Nunito',ui-rounded,system-ui,sans-serif;color:#2b2033;user-select:none;-webkit-user-select:none;-webkit-tap-highlight-color:transparent;overflow:hidden}
.msg-root *{box-sizing:border-box}
.msg-root button{font-family:inherit;cursor:pointer}
.msg-title,.msg-panel h2,.msg-room,.msg-dialog .who,.msg-a,.msg-clock .t,.msg-btn.go{font-family:'Pixelify Sans','Nunito',sans-serif}
.msg-top{position:absolute;left:8px;right:8px;top:8px;display:flex;gap:6px;align-items:flex-start;flex-wrap:wrap;pointer-events:none}
.msg-card{background:#fff8ec;border:3px solid #2b2033;border-radius:10px;box-shadow:0 3px 0 #2b2033;pointer-events:auto}
.msg-clock{padding:4px 10px;min-width:118px}
.msg-clock .t{font-size:20px;font-weight:700;line-height:1;font-variant-numeric:tabular-nums}
.msg-clock .d{font-size:11px;opacity:.75}
.msg-clock .p{font-size:12px;font-weight:600;color:#3d6fb0}
.msg-stats{display:flex;gap:4px;padding:4px 6px;align-items:center;flex-wrap:wrap}
.msg-chip{display:flex;align-items:center;gap:3px;font-size:13px;font-weight:600;padding:1px 5px;border-radius:6px;background:#f3e6cf}
.msg-energy{width:54px;height:9px;border:2px solid #2b2033;border-radius:4px;background:#e9dcc9;overflow:hidden}
.msg-energy i{display:block;height:100%;background:#6cbf6a;transition:width .3s}
.msg-btns{margin-left:auto;display:flex;gap:5px}
.msg-ib{pointer-events:auto;width:38px;height:38px;border:3px solid #2b2033;border-radius:10px;background:#fff8ec;box-shadow:0 3px 0 #2b2033;font-size:17px;display:flex;align-items:center;justify-content:center;padding:0;color:#2b2033;font-weight:700}
.msg-ib:active{transform:translateY(2px);box-shadow:0 1px 0 #2b2033}
.msg-obj{position:absolute;left:50%;transform:translateX(-50%);top:62px;max-width:min(92vw,520px);padding:5px 12px;font-size:14px;font-weight:600;text-align:center;background:#2b2033e6;color:#fff8ec;border-radius:10px;pointer-events:none;line-height:1.25}
.msg-obj b{color:#ffd84d}
.msg-toasts{position:absolute;top:104px;left:0;right:0;display:flex;flex-direction:column;align-items:center;gap:4px;pointer-events:none}
.msg-toast{background:#fff8ec;border:2px solid #2b2033;border-radius:8px;padding:3px 10px;font-size:14px;font-weight:700;animation:msgToast 2.4s forwards}
@keyframes msgToast{0%{opacity:0;transform:translateY(-6px)}10%{opacity:1;transform:none}80%{opacity:1}100%{opacity:0;transform:translateY(-8px)}}
.msg-room{position:absolute;left:50%;top:38%;transform:translate(-50%,-50%);font-size:28px;font-weight:700;color:#fff8ec;text-shadow:0 3px 0 #2b2033,3px 0 0 #2b2033,-3px 0 0 #2b2033,0 -3px 0 #2b2033;opacity:0;pointer-events:none;white-space:nowrap}
.msg-room.show{animation:msgRoom 1.8s forwards}
@keyframes msgRoom{0%{opacity:0;transform:translate(-50%,-30%)}15%{opacity:1;transform:translate(-50%,-50%)}75%{opacity:1}100%{opacity:0}}
.msg-pad{position:absolute;left:14px;bottom:18px;width:150px;height:150px;pointer-events:auto;touch-action:none}
.msg-pad button{position:absolute;width:52px;height:52px;border-radius:14px;border:3px solid #2b2033;background:#fff8ecd9;box-shadow:0 3px 0 #2b2033;font-size:20px;color:#2b2033;touch-action:none;padding:0}
.msg-pad button.on{background:#ffd84d;transform:translateY(2px);box-shadow:0 1px 0 #2b2033}
.msg-pad .u{left:49px;top:0}.msg-pad .d{left:49px;bottom:0}.msg-pad .l{left:0;top:49px}.msg-pad .r{right:0;top:49px}
.msg-act{position:absolute;right:18px;bottom:30px;display:flex;flex-direction:column;align-items:flex-end;gap:8px;pointer-events:none}
.msg-a{width:78px;height:78px;border-radius:50%;border:3px solid #2b2033;background:#e2544a;color:#fff8ec;font-size:26px;font-weight:700;box-shadow:0 4px 0 #2b2033;pointer-events:auto;touch-action:none}
.msg-a:active,.msg-a.on{transform:translateY(3px);box-shadow:0 1px 0 #2b2033}
.msg-prompt{background:#2b2033;color:#fff8ec;padding:4px 10px;border-radius:8px;font-size:14px;font-weight:600;max-width:200px;text-align:right}
.msg-prompt:empty{display:none}
.msg-ff{pointer-events:auto;border:3px solid #2b2033;border-radius:10px;background:#ffd84d;box-shadow:0 3px 0 #2b2033;padding:5px 10px;font-size:14px;font-weight:700;color:#2b2033}
.msg-ff[hidden]{display:none}
.msg-modal{position:absolute;inset:0;background:#1d1a2b99;display:flex;align-items:center;justify-content:center;padding:14px;pointer-events:auto;z-index:5}
.msg-modal.bottom{align-items:flex-end;background:transparent;padding-bottom:18px}
.msg-panel{background:#fff8ec;border:3px solid #2b2033;border-radius:14px;box-shadow:0 5px 0 #2b2033;padding:14px;max-width:560px;width:100%;max-height:calc(100% - 10px);overflow:auto}
.msg-panel h2{margin:0 0 6px;font-size:24px;line-height:1.1}
.msg-panel h3{margin:10px 0 4px;font-size:16px}
.msg-panel p{margin:4px 0;font-size:15px;line-height:1.35}
.msg-dialog{max-width:620px}
.msg-dialog .who{display:inline-block;background:#3d6fb0;color:#fff;border:2px solid #2b2033;border-radius:8px;padding:1px 8px;font-weight:700;font-size:14px;margin-bottom:6px}
.msg-dialog .txt{font-size:17px;line-height:1.35;min-height:44px}
.msg-opts{display:flex;flex-direction:column;gap:6px;margin-top:10px}
.msg-btn{border:3px solid #2b2033;border-radius:10px;background:#ffd84d;box-shadow:0 3px 0 #2b2033;padding:8px 12px;font-size:16px;font-weight:700;color:#2b2033;text-align:left}
.msg-btn.alt{background:#fff8ec}
.msg-btn.go{background:#6cbf6a;text-align:center;font-size:19px}
.msg-btn:active{transform:translateY(2px);box-shadow:0 1px 0 #2b2033}
.msg-row{display:flex;align-items:center;gap:6px;margin:6px 0;flex-wrap:wrap}
.msg-row label{width:78px;font-weight:700;font-size:14px}
.msg-sw{width:28px;height:28px;border-radius:8px;border:3px solid #2b2033;padding:0}
.msg-sw.sel{outline:3px solid #ffd84d;outline-offset:1px;transform:scale(1.08)}
.msg-pill{border:2px solid #2b2033;border-radius:8px;background:#fff8ec;padding:3px 8px;font-size:13px;font-weight:600}
.msg-pill.sel{background:#ffd84d}
.msg-creator{display:flex;gap:14px;flex-wrap:wrap}
.msg-prev{flex:0 0 auto;display:flex;flex-direction:column;align-items:center;gap:6px;margin:auto}
@media (max-width:520px){.msg-prev{flex-direction:row;flex-wrap:wrap;justify-content:center}}
.msg-prev canvas{width:128px;height:192px;image-rendering:pixelated;background:#f3e6cf;border:3px solid #2b2033;border-radius:12px}
.msg-name{font-family:inherit;font-size:17px;border:3px solid #2b2033;border-radius:8px;padding:5px 8px;width:150px;background:#fff}
.msg-title{font-size:30px;font-weight:700;line-height:1;margin:0 0 2px;color:#3d6fb0;text-shadow:0 2px 0 #2b2033}
.msg-grid{display:grid;grid-template-columns:1fr auto auto;gap:3px 10px;font-size:15px}
.msg-grid .g{font-weight:700;text-align:right}
.msg-sched{display:flex;flex-direction:column;gap:3px;font-size:14px}
.msg-sched div{padding:3px 8px;border-radius:6px;background:#f3e6cf}
.msg-sched div.now{background:#ffd84d;font-weight:700}
.msg-map canvas{width:100%;image-rendering:pixelated;border:3px solid #2b2033;border-radius:10px;display:block}
.msg-keys{display:flex;gap:4px;justify-content:center;margin:10px 0}
.msg-keys button{width:36px;height:90px;border:3px solid #2b2033;border-radius:0 0 8px 8px;background:#fff;font-weight:700;font-size:13px;display:flex;align-items:flex-end;justify-content:center;padding-bottom:6px}
.msg-keys button.on{background:#ffd84d}
.msg-paint{display:grid;grid-template-columns:repeat(8,1fr);width:224px;height:224px;margin:8px auto;border:3px solid #2b2033;touch-action:none}
.msg-paint div{border:1px solid #0001}
.msg-bar{position:relative;height:30px;border:3px solid #2b2033;border-radius:10px;background:#e9dcc9;margin:12px 0;overflow:hidden}
.msg-bar .zone{position:absolute;top:0;bottom:0;background:#6cbf6a}
.msg-bar .cur{position:absolute;top:-2px;bottom:-2px;width:6px;background:#2b2033;border-radius:3px}
.msg-help{font-size:13px;opacity:.8}
.msg-hearts{color:#e2445c;letter-spacing:1px}
@media (max-width:520px){.msg-clock{min-width:104px;padding:3px 8px}.msg-clock .t{font-size:17px}.msg-stats{flex:1;gap:3px;padding:3px 4px}.msg-energy{width:40px}.msg-btns{position:absolute;right:0;top:100%;margin-top:6px;flex-direction:column}.msg-ib{width:36px;height:36px;font-size:15px}.msg-obj{top:66px;left:8px;transform:none;text-align:left;font-size:13px;max-width:calc(100vw - 66px)}.msg-toasts{top:118px}.msg-chip{font-size:12px;padding:1px 3px}.msg-panel{padding:12px}.msg-panel h2{font-size:21px}.msg-prev canvas{width:88px;height:132px}.msg-creator{gap:8px}.msg-row{margin:4px 0;gap:4px}.msg-row label{width:64px;font-size:13px}.msg-sw{width:25px;height:25px}}
@media (hover:hover) and (pointer:fine){.msg-pad{opacity:.55}}
`;
