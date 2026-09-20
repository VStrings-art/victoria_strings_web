import { chromium } from 'playwright';
const b=await chromium.launch({channel:'chrome'});
const p=await (await b.newContext({viewport:{width:1440,height:900}})).newPage();
await p.goto('http://localhost:4321/events',{waitUntil:'networkidle'});
console.log(await p.evaluate(()=>{
  const a=document.querySelector('main article');
  const cs=getComputedStyle(a);
  return { display: cs.display, cols: cs.gridTemplateColumns, className: a.className.slice(0,120) };
}));
