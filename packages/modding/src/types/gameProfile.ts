export interface GameProfile {
  enableSound: boolean;
  soundVolume: number;
  enableMusic: boolean;
  musicVolume: number;
  enableFootstepsSound: boolean;
  enableCombatMusic: boolean;
  reproduceSoundsInBackground: boolean;
  chatFont: number;
  speechDelay: number;
  scaleSpeechDelay: boolean;
  saveJournalToFile: boolean;
  forceUnicodeJournal: boolean;
  ignoreAllianceMessages: boolean;
  ignoreGuildMessages: boolean;
  speechHue: number;
  whisperHue: number;
  emoteHue: number;
  yellHue: number;
  partyMessageHue: number;
  guildMessageHue: number;
  allyMessageHue: number;
  chatMessageHue: number;
  innocentHue: number;
  partyAuraHue: number;
  friendHue: number;
  criminalHue: number;
  canAttackHue: number;
  enemyHue: number;
  murdererHue: number;
  beneficHue: number;
  harmfulHue: number;
  neutralHue: number;
  enabledSpellHue: boolean;
  enabledSpellFormat: boolean;
  spellDisplayFormat: string;
  poisonHue: number;
  paralyzedHue: number;
  invulnerableHue: number;
  enabledCriminalActionQuery: boolean;
  enabledBeneficialCriminalActionQuery: boolean;
  enableStatReport: boolean;
  enableSkillReport: boolean;
  useOldStatusGump: boolean;
  backpackStyle: number;
  highlightGameObjects: boolean;
  highlightMobilesByParalize: boolean;
  highlightMobilesByPoisoned: boolean;
  highlightMobilesByInvul: boolean;
  showMobilesHP: boolean;
  mobileHPType: number;
  mobileHPShowWhen: number;
  drawRoofs: boolean;
  treeToStumps: boolean;
  enableCaveBorder: boolean;
  hideVegetation: boolean;
  fieldsType: number;
  noColorObjectsOutOfRange: boolean;
  useCircleOfTransparency: boolean;
  circleOfTransparencyRadius: number;
  circleOfTransparencyType: number;
  vendorGumpHeight: number;
  defaultScale: number;
  enableMousewheelScaleZoom: boolean;
  saveScaleAfterClose: boolean;
  restoreScaleAfterUnpressCtrl: boolean;
  bandageSelfOld: boolean;
  enableDeathScreen: boolean;
  enableBlackWhiteEffect: boolean;
  useTooltip: boolean;
  tooltipTextHue: number;
  tooltipDelayBeforeDisplay: number;
  tooltipDisplayZoom: number;
  tooltipBackgroundOpacity: number;
  tooltipFont: number;
  enablePathfind: boolean;
  useShiftToPathfind: boolean;
  alwaysRun: boolean;
  alwaysRunUnlessHidden: boolean;
  smoothMovements: boolean;
  holdDownKeyTab: boolean;
  holdShiftForContext: boolean;
  holdShiftToSplitStack: boolean;
  gameWindowLock: boolean;
  gameWindowFullSize: boolean;
  windowBorderless: boolean;
  topbarGumpIsMinimized: boolean;
  topbarGumpIsDisabled: boolean;
  useAlternativeLights: boolean;
  useCustomLightLevel: boolean;
  lightLevel: number;
  useColoredLights: boolean;
  useDarkNights: boolean;
  closeHealthBarType: number;
  activateChatAfterEnter: boolean;
  activateChatAdditionalButtons: boolean;
  activateChatShiftEnterSupport: boolean;
  useObjectsFading: boolean;
  holdDownKeyAltToCloseAnchored: boolean;
  closeAllAnchoredGumpsInGroupWithRightClick: boolean;
  holdAltToMoveGumps: boolean;
  hideScreenshotStoredInMessage: boolean;
  castSpellsByOneClick: boolean;
  buffBarTime: boolean;
  fastSpellsAssign: boolean;
  autoOpenDoors: boolean;
  smoothDoors: boolean;
  autoOpenCorpses: boolean;
  autoOpenCorpseRange: number;
  corpseOpenOptions: number;
  skipEmptyCorpse: boolean;
  disableDefaultHotkeys: boolean;
  disableArrowBtn: boolean;
  disableTabBtn: boolean;
  disableCtrlQWBtn: boolean;
  disableAutoMove: boolean;
  enableDragSelect: boolean;
  dragSelectModifierKey: number;
  dragSelectHumanoidsOnly: boolean;
  dragSelectStartX: number;
  dragSelectStartY: number;
  dragSelectAsAnchor: boolean;
  nameOverheadTypeAllowed: number;
  nameOverheadToggled: boolean;
  showTargetRangeIndicator: boolean;
  partyInviteGump: boolean;
  customBarsToggled: boolean;
  cbBlackBGToggled: boolean;
  showInfoBar: boolean;
  infoBarHighlightType: number;
  infoBarItems: null;
  macros: null;
  counterBarEnabled: boolean;
  counterBarHighlightOnUse: boolean;
  counterBarHighlightOnAmount: boolean;
  counterBarDisplayAbbreviatedAmount: boolean;
  counterBarAbbreviatedAmount: number;
  counterBarHighlightAmount: number;
  counterBarCellSize: number;
  counterBarRows: number;
  counterBarColumns: number;
  showSkillsChangedMessage: boolean;
  showSkillsChangedDeltaValue: number;
  showStatsChangedMessage: boolean;
  shadowsEnabled: boolean;
  shadowsStatics: boolean;
  terrainShadowsLevel: number;
  auraUnderFeetType: number;
  auraOnMouse: boolean;
  partyAura: boolean;
  useXBR: boolean;
  hideChatGradient: boolean;
  standardSkillsGump: boolean;
  showNewMobileNameIncoming: boolean;
  showNewCorpseNameIncoming: boolean;
  grabBagSerial: number;
  gridLootType: number;
  reduceFPSWhenInactive: boolean;
  overrideAllFonts: boolean;
  overrideAllFontsIsUnicode: boolean;
  sallosEasyGrab: boolean;
  journalDarkMode: boolean;
  containersScale: number;
  scaleItemsInsideContainers: boolean;
  doubleClickToLootInsideContainers: boolean;
  useLargeContainerGumps: boolean;
  relativeDragAndDropItems: boolean;
  highlightContainerWhenSelected: boolean;
  showHouseContent: boolean;
  saveHealthbars: boolean;
  textFading: boolean;
  useSmoothBoatMovement: boolean;
  ignoreStaminaCheck: boolean;
  showJournalClient: boolean;
  showJournalObjects: boolean;
  showJournalSystem: boolean;
  showJournalGuildAlly: boolean;
  worldMapWidth: number;
  worldMapHeight: number;
  worldMapFont: number;
  worldMapFlipMap: boolean;
  worldMapTopMost: boolean;
  worldMapFreeView: boolean;
  worldMapShowParty: boolean;
  worldMapZoomIndex: number;
  worldMapShowCoordinates: boolean;
  worldMapShowMouseCoordinates: boolean;
  worldMapShowMobiles: boolean;
  worldMapShowPlayerName: boolean;
  worldMapShowPlayerBar: boolean;
  worldMapShowGroupName: boolean;
  worldMapShowGroupBar: boolean;
  worldMapShowMarkers: boolean;
  worldMapShowMarkersNames: boolean;
  worldMapShowMultis: boolean;
  worldMapHiddenMarkerFiles: string;
  worldMapHiddenZoneFiles: string;
  worldMapShowGridIfZoomed: boolean;
}
