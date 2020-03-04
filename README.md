## Description

When there are multiple same-type components on a page that contains a dynamic value, excluding
the first instance, each dynamic style of each subsequent component outputs a `Rule is not linked.
Missing sheet option "link: true"` error. 

For example, if you look at `/src/pages/index.tsx`, you will see 3 boxes, each with 1 dynamic
style. So 2 warnings are emitted.
