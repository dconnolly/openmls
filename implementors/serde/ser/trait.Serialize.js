(function() {var implementors = {};
implementors["openmls"] = [{"text":"impl Serialize for Ciphersuite","synthetic":false,"types":[]},{"text":"impl Serialize for CiphersuiteName","synthetic":false,"types":[]},{"text":"impl Serialize for SignatureScheme","synthetic":false,"types":[]},{"text":"impl Serialize for HpkeCiphertext","synthetic":false,"types":[]},{"text":"impl Serialize for Secret","synthetic":false,"types":[]},{"text":"impl Serialize for Signature","synthetic":false,"types":[]},{"text":"impl Serialize for SignaturePublicKey","synthetic":false,"types":[]},{"text":"impl Serialize for Constants","synthetic":false,"types":[]},{"text":"impl Serialize for Config","synthetic":false,"types":[]},{"text":"impl Serialize for ProtocolVersion","synthetic":false,"types":[]},{"text":"impl Serialize for CredentialType","synthetic":false,"types":[]},{"text":"impl Serialize for Certificate","synthetic":false,"types":[]},{"text":"impl Serialize for MLSCredentialType","synthetic":false,"types":[]},{"text":"impl Serialize for Credential","synthetic":false,"types":[]},{"text":"impl Serialize for BasicCredential","synthetic":false,"types":[]},{"text":"impl Serialize for CapabilitiesExtension","synthetic":false,"types":[]},{"text":"impl Serialize for KeyIDExtension","synthetic":false,"types":[]},{"text":"impl Serialize for LifetimeExtension","synthetic":false,"types":[]},{"text":"impl Serialize for ParentHashExtension","synthetic":false,"types":[]},{"text":"impl Serialize for RatchetTreeExtension","synthetic":false,"types":[]},{"text":"impl Serialize for ExtensionType","synthetic":false,"types":[]},{"text":"impl Serialize for ExtensionStruct","synthetic":false,"types":[]},{"text":"impl&lt;'typetag&gt; Serialize for dyn Extension + 'typetag","synthetic":false,"types":[]},{"text":"impl&lt;'typetag&gt; Serialize for dyn Extension + Send + 'typetag","synthetic":false,"types":[]},{"text":"impl&lt;'typetag&gt; Serialize for dyn Extension + Sync + 'typetag","synthetic":false,"types":[]},{"text":"impl&lt;'typetag&gt; Serialize for dyn Extension + Send + Sync + 'typetag","synthetic":false,"types":[]},{"text":"impl Serialize for MLSPlaintext","synthetic":false,"types":[]},{"text":"impl Serialize for ContentType","synthetic":false,"types":[]},{"text":"impl Serialize for MLSPlaintextContentType","synthetic":false,"types":[]},{"text":"impl Serialize for Mac","synthetic":false,"types":[]},{"text":"impl Serialize for MembershipTag","synthetic":false,"types":[]},{"text":"impl Serialize for SenderType","synthetic":false,"types":[]},{"text":"impl Serialize for Sender","synthetic":false,"types":[]},{"text":"impl Serialize for HandshakeMessageFormat","synthetic":false,"types":[]},{"text":"impl Serialize for ManagedGroupConfig","synthetic":false,"types":[]},{"text":"impl Serialize for UpdatePolicy","synthetic":false,"types":[]},{"text":"impl Serialize for SerializedManagedGroup","synthetic":false,"types":[]},{"text":"impl&lt;'a&gt; Serialize for ManagedGroup&lt;'a&gt;","synthetic":false,"types":[]},{"text":"impl Serialize for MlsGroup","synthetic":false,"types":[]},{"text":"impl Serialize for GroupId","synthetic":false,"types":[]},{"text":"impl Serialize for GroupEpoch","synthetic":false,"types":[]},{"text":"impl Serialize for GroupContext","synthetic":false,"types":[]},{"text":"impl Serialize for KeyPackage","synthetic":false,"types":[]},{"text":"impl Serialize for KeyPackageBundle","synthetic":false,"types":[]},{"text":"impl Serialize for ProposalOrRef","synthetic":false,"types":[]},{"text":"impl Serialize for Proposal","synthetic":false,"types":[]},{"text":"impl Serialize for ProposalReference","synthetic":false,"types":[]},{"text":"impl Serialize for AddProposal","synthetic":false,"types":[]},{"text":"impl Serialize for UpdateProposal","synthetic":false,"types":[]},{"text":"impl Serialize for RemoveProposal","synthetic":false,"types":[]},{"text":"impl Serialize for PreSharedKeyProposal","synthetic":false,"types":[]},{"text":"impl Serialize for ReInitProposal","synthetic":false,"types":[]},{"text":"impl Serialize for Commit","synthetic":false,"types":[]},{"text":"impl Serialize for ConfirmationTag","synthetic":false,"types":[]},{"text":"impl Serialize for PSKType","synthetic":false,"types":[]},{"text":"impl Serialize for ExternalPsk","synthetic":false,"types":[]},{"text":"impl Serialize for ReinitPsk","synthetic":false,"types":[]},{"text":"impl Serialize for BranchPsk","synthetic":false,"types":[]},{"text":"impl Serialize for Psk","synthetic":false,"types":[]},{"text":"impl Serialize for PreSharedKeyID","synthetic":false,"types":[]},{"text":"impl Serialize for InitSecret","synthetic":false,"types":[]},{"text":"impl Serialize for ExporterSecret","synthetic":false,"types":[]},{"text":"impl Serialize for AuthenticationSecret","synthetic":false,"types":[]},{"text":"impl Serialize for ExternalSecret","synthetic":false,"types":[]},{"text":"impl Serialize for ConfirmationKey","synthetic":false,"types":[]},{"text":"impl Serialize for MembershipKey","synthetic":false,"types":[]},{"text":"impl Serialize for ResumptionSecret","synthetic":false,"types":[]},{"text":"impl Serialize for SenderDataSecret","synthetic":false,"types":[]},{"text":"impl Serialize for EpochSecrets","synthetic":false,"types":[]},{"text":"impl Serialize for NodeIndex","synthetic":false,"types":[]},{"text":"impl Serialize for LeafIndex","synthetic":false,"types":[]},{"text":"impl Serialize for NodeType","synthetic":false,"types":[]},{"text":"impl Serialize for Node","synthetic":false,"types":[]},{"text":"impl Serialize for ParentNode","synthetic":false,"types":[]},{"text":"impl Serialize for PathKeys","synthetic":false,"types":[]},{"text":"impl Serialize for CommitSecret","synthetic":false,"types":[]},{"text":"impl Serialize for PrivateTree","synthetic":false,"types":[]},{"text":"impl Serialize for SecretTreeNode","synthetic":false,"types":[]},{"text":"impl Serialize for SecretTree","synthetic":false,"types":[]},{"text":"impl Serialize for SenderRatchet","synthetic":false,"types":[]},{"text":"impl Serialize for RatchetTree","synthetic":false,"types":[]},{"text":"impl Serialize for UpdatePathNode","synthetic":false,"types":[]},{"text":"impl Serialize for UpdatePath","synthetic":false,"types":[]}];
implementors["tls_codec"] = [{"text":"impl&lt;T&gt; Serialize for TlsVecU8&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + Deserialize + Clone + PartialEq,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for TlsVecU16&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + Deserialize + Clone + PartialEq,&nbsp;</span>","synthetic":false,"types":[]},{"text":"impl&lt;T&gt; Serialize for TlsVecU32&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: Serialize + Deserialize + Clone + PartialEq,&nbsp;</span>","synthetic":false,"types":[]}];
if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()