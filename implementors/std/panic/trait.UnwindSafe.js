(function() {var implementors = {};
implementors["openmls"] = [{"text":"impl UnwindSafe for ErrorString","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ErrorPayload","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HpkeCiphertext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KdfLabel","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Secret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AeadKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReuseGuard","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AeadNonce","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Signature","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignaturePrivateKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignaturePublicKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignatureKeypair","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Ciphersuite","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CiphersuiteName","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SignatureScheme","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HKDFError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CryptoError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cursor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VecSize","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CodecError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CONFIG","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Constants","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for PersistentConfig","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Config","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProtocolVersion","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConfigError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Certificate","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Credential","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BasicCredential","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CredentialBundle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CredentialType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSCredentialType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CredentialError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExtensionStruct","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExtensionType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CapabilitiesExtension","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExtensionError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LifetimeExtensionError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CapabilitiesExtensionError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyPackageIdError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParentHashError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RatchetTreeError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InvalidExtensionError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyIDExtension","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LifetimeExtension","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParentHashExtension","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for RatchetTreeExtension","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSCiphertext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSSenderData","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSSenderDataAAD","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MLSCiphertextContent","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSCiphertextContentAAD","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSPlaintextError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSCiphertextError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for VerificationError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MLSPlaintext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Mac","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for MLSPlaintextTBMPayload&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MembershipTag","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for MLSPlaintextTBS&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MLSPlaintextTBSPayload","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for MLSPlaintextCommitContent&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for MLSPlaintextCommitAuthData&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ContentType","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MLSPlaintextContentType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Sender","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SenderType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ManagedGroupCallbacks","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ManagedGroupConfig","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UpdatePolicy","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ManagedGroup&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MlsGroup","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupId","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupEpoch","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupConfig","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for Removal&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for HandshakeMessageFormat","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EmptyInputError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InvalidMessageError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ManagedGroupError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PendingProposalsError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UseAfterEviction","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for MLSMessage","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WelcomeError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ApplyCommitError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CreateCommitError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExporterError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for SerializedManagedGroup","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for KeyPackage","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for KeyPackageBundle","synthetic":true,"types":[]},{"text":"impl UnwindSafe for KeyPackageError","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Welcome","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EncryptedGroupSecrets","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Commit","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConfirmationTag","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for GroupInfo","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for GroupSecrets","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProposalQueueError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProposalOrRefTypeError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for QueuedProposalError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProposalReference","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for QueuedProposal&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for ProposalQueue&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for AddProposal","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for UpdateProposal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for RemoveProposal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PreSharedKeyProposal","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ReInitProposal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProposalType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ProposalOrRefType","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ProposalOrRef","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Proposal","synthetic":true,"types":[]},{"text":"impl UnwindSafe for InitSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for JoinerSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PlaintextSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for IntermediateSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for WelcomeSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpochSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EncryptionSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExporterSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for AuthenticationSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExternalSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ConfirmationKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for MembershipKey","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ResumptionSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SenderDataSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for EpochSecrets","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ExternalPsk","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ReinitPsk","synthetic":true,"types":[]},{"text":"impl UnwindSafe for BranchPsk","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PreSharedKeyID","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PreSharedKeys","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PSKType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Psk","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; !UnwindSafe for LeafNodeHashInput&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ParentNodeTreeHashInput&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for RatchetTree","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for ApplyProposalsValues","synthetic":true,"types":[]},{"text":"impl UnwindSafe for UpdatePathNode","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for UpdatePath","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TreeError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParentHashError","synthetic":true,"types":[]},{"text":"impl&lt;'a&gt; UnwindSafe for ParentHashInput&lt;'a&gt;","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NodeIndex","synthetic":true,"types":[]},{"text":"impl UnwindSafe for LeafIndex","synthetic":true,"types":[]},{"text":"impl !UnwindSafe for Node","synthetic":true,"types":[]},{"text":"impl UnwindSafe for ParentNode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for NodeType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PathKeys","synthetic":true,"types":[]},{"text":"impl UnwindSafe for CommitSecret","synthetic":true,"types":[]},{"text":"impl UnwindSafe for PrivateTree","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TreeContext","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SecretTreeNode","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SecretTree","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SecretTreeError","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SecretType","synthetic":true,"types":[]},{"text":"impl UnwindSafe for SenderRatchet","synthetic":true,"types":[]},{"text":"impl UnwindSafe for TreeMathError","synthetic":true,"types":[]}];
implementors["test_macros"] = [{"text":"impl UnwindSafe for TestInput","synthetic":true,"types":[]}];
implementors["tls_codec"] = [{"text":"impl&lt;T&gt; UnwindSafe for TlsVecU16&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TlsVecU32&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl&lt;T&gt; UnwindSafe for TlsVecU8&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: UnwindSafe,&nbsp;</span>","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Cursor","synthetic":true,"types":[]},{"text":"impl UnwindSafe for Error","synthetic":true,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()