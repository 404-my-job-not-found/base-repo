const teamInfo = {
  TeamA: ["이기훈", "이하연", "서주희", "임수빈", "박성택"],
  TeamB: ["임수민", "전민희", "홍성우", "민성윤"],
  TeamC: ["김민지", "윤영서", "김보경", "박영호"],
  TeamD: ["장운서", "이지환", "박성식", "김유빈", "강경민"],
};

for (const [teamName, members] of Object.entries(teamInfo)) {
  // members가 문자열인 경우 배열로 변환
  const memberArray = Array.isArray(members)
    ? members
    : members
        .toString()
        .split(",")
        .map((m) => m.trim());
  console.log(`Checking team: ${teamName}, members: ${memberArray.join(", ")}`);

  const prTitle = "윤영서_best time to buy and sell stock ii";
  // 팀 멤버들의 이름이 PR 타이틀에 있는지 확인
  for (const member of memberArray) {
    if (member && member.trim()) {
      console.log("member", member);
      console.log("prTitle", prTitle);
      if (prTitle.includes(member.trim())) {
        const labelName = `team-${teamName.toLowerCase()}`;
        console.log(
          `Found member: ${member} from team: ${teamName} -> adding label: ${labelName}`
        );
        break; // 해당 팀에서 한 명이라도 찾으면 더 이상 확인하지 않음
      }
    }
  }
}
